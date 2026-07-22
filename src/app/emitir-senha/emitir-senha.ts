import { Component, inject } from '@angular/core';

import { SenhaService } from '../services/senha.service';
import { SenhaDto } from '../models/senha-dto';
 

@Component({
  selector: 'app-emitir-senha',
  templateUrl: './emitir-senha.html',
  styleUrl: './emitir-senha.css',
})
export class EmitirSenha {
    
   private senhaService = inject(SenhaService);

   senhaDto?: SenhaDto;

   emitirSenha(tipo: string){
        
      this.senhaService.emitirSenha(tipo)
            .subscribe(resposta =>{
               
               this.senhaDto = resposta

            });
   }


}
