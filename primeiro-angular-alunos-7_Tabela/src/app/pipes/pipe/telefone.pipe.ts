import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(valor: string): string {
    // 1234-5678 8 caracteres
    if(valor.length == 8) {
      return  valor.substring(0,4)  
              + '-' + valor.substring(4,8)
    } 
    
    if(valor.length == 10) {
      // (83)1234-5678 10 caracteres
      return '(' + valor.substring(0,2) 
              + ')' + valor.substring(2,5) 
              + '-' + valor.substring(5,10)
    }

    if(valor.length == 11){
      //(83)91234-5678 11 caracteres
      return '(' + valor.substring(0,2) 
            + ')' + valor.substring(2,6) 
            + '-' + valor.substring(6,11)
    }
    return valor;
  }

}
