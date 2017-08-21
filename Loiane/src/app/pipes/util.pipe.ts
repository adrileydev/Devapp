import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'util'
})
export class UtilPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   let values = value.split('');
   let resultado = '';


  for(let v of values){
      resultado+= this.Alterar(v)+'';

  }

   return resultado;

  }

  Alterar(v: string ){
     return v.substr(0,1).toUpperCase() + v.substr(1).toLowerCase();
  }

}
