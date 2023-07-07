import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import {IMensagem} from '../modelo/IMensagem';

@Injectable({
  providedIn: 'root'
})
export class MensagemConsoleServiceService implements IMensagem {

  constructor() {

  }
    
    info(mensagem: string): void {
      (console.log(mensagem));
    }
  
    sucesso(mensagem: string): void {
      (console.log(mensagem));
    }
  
    erro(mensagem: string): void {
      (console.log(mensagem));
    }

    alert(mensagem: string): void{
      alert(mensagem);
      console.log(mensagem)
    }

   
}
