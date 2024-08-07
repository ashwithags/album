import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: any[], key:string, args: any): any {

    if(args && data && key){
      return  data.filter((post)=>{
        return post[key].toString() == args
      })
      
    }else{
      return data;
    }




  
  }

}
