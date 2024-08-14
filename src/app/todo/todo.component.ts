import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { TodoService } from '../Services/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public toDoList:any[] = [];
  public editSelected:boolean = true;
  public message:any = {};
  public status:string = ''; 
  public searchTodoString:string = '';
  public filterdTodo:any[] = [];
  public newTodo:any = {};
  public showAddNewSection:boolean = false; 
  public AddnewError:string = '';
  public showTable:boolean = true;
  public showEditSection:boolean = false;
  public editingTask:any = {};

  constructor(
    private todoService:TodoService,
  ) { }

  ngOnInit(): void {
    this.getTodoList();
    console.log('ng init');

  }

//   ngOnChanges(){
//     console.log('ng on Change detected');

//   }
//   ngDoCheck(): void {
//     console.log('Change detected');
// }
 


  getTodoList(){
    this.todoService.getTodoList().subscribe(
      (data)=>{
        console.log(data);
        this.toDoList = data;

        this.toDoList = this.toDoList.map((todo:any)=>{
          todo.editSelected = true;
          return todo;
        })
        this.filterdTodo = this.toDoList;
      },
      (error)=>{
        console.log(error);
      }
    )
  }


  EditTodo(id:number){
    this.toDoList = this.toDoList.map((todo:any)=>{
      if(todo.id == id){
        todo.editSelected = false;
      }
      return todo;
    })
  }


  Deletetodo(id:number){

    let deletedItem = this.toDoList.find((todo:any) => todo.id == id);

    this.todoService.deleteTodo(deletedItem).subscribe(
      (data)=>{
        console.log(data);
        this.toDoList =  this.toDoList.filter((todo:any)=> todo.id != id);
        this.message.Message = 'Task with Id '+id+' deleted successfully';
        this.message.messgeType = 'success';
      },
      (error)=>{
        console.log(error);
        this.message.Message = 'Delete is unsuccessfull';
        this.message.messgeType = 'error';
      }
    )


    
  }

  CancelTodo(id:number){


  }


  saveTodo(id:number){

    //   let updatedTodo = this.toDoList.find((todo: any) => todo.id === id);

    let updatedTodo;
    console.log(id);
    updatedTodo = this.toDoList.find((todo:any)=>{
      if(todo.id == id){
        todo.editSelected = true;
        return todo;        
      }
    })

    this.todoService.updatedTodo(updatedTodo).subscribe(
      (data)=>{
        console.log(data);
        this.message.Message = 'Task updated successfully';
        this.message.messgeType = 'success';
        this.showEditSection = false;
      },
      (error)=>{
        this.message.Message = error;
        this.message.messgeType = 'error';
      }
    )
  }


  changeStatus(id:number){
    this.saveTodo(id);
  }

  clearMessage(){
    this.message.Message = '';
    this.message.messgeType = '';
  }

  SearchTodo(){
    console.log(this.searchTodoString);
    this.toDoList = this.filterdTodo;

    if(this.searchTodoString.trim()){
      let filteredList = this.toDoList.filter((todo:any)=>{
        return todo.title.toLowerCase().includes(this.searchTodoString.toLowerCase())
      })
      this.toDoList = filteredList;
    }
    else{
      this.toDoList = this.filterdTodo;
    }
  }

  showNewTodoBlock(){
    this.showAddNewSection = true;
  }

  AddNewTodo(){
    if(this.newTodo.title.length > 10){
      this.newTodo.id=this.toDoList.length+1;
      this.newTodo.completed = false;
      this.newTodo.userId = 1;
      this.newTodo.editSelected = true;
      this.newTodo.new = true;
      console.log(this.newTodo);
  
      this.todoService.addNewTodo(this.newTodo).subscribe(
        (data)=>{
          this.toDoList.unshift(this.newTodo);
          this.message.Message = 'New todo has been added successfully';
          this.message.messgeType = 'success';  
          this.newTodo = new Object();
          this.AddnewError = '';
          this.showAddNewSection = false;

          },
          (error)=>{
            this.message.Message = error;
            this.message.messgeType = 'error';
          }
      )
    }
    else{
        this.AddnewError = "Task title should be atleast 10 character";
    }
    

  }

  CancelNewTodo(){
    this.newTodo = new Object();
    this.AddnewError = '';
    this.showAddNewSection = false;
  }

  ToggleDesign(){
    if(this.showTable == true){
      this.showTable = false;  
    }
    else{
      this.showTable = true;
    }
  }

  EditColumnTask(task:any){
    this.showEditSection = true;
    this.showAddNewSection = false;
    this.editingTask = {...task};
  }

}

