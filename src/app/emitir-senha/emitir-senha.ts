import { Component, inject, ChangeDetectorRef } from '@angular/core';

import { SenhaService } from '../services/senha.service';
import { SenhaDto } from '../models/senha-dto';


@Component({
   selector: 'app-emitir-senha',
   templateUrl: './emitir-senha.html',
   styleUrl: './emitir-senha.css',
})
export class EmitirSenha {

   private senhaService = inject(SenhaService);

   private cdr = inject(ChangeDetectorRef);

   senhaDto: SenhaDto = {
      codigo: '',
      dataCriacao: ''
   };


   emitirSenha(tipo: string) {

      this.senhaService.emitirSenha(tipo)
         .subscribe(resposta => {

            this.senhaDto = resposta;

            this.cdr.detectChanges();

         });

   }


}
