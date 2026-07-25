import { Component, inject,  ChangeDetectorRef } from '@angular/core';

import { SenhaService } from '../services/senha.service';
import { ProximaSenhaDto } from '../models/proxima-senha-dto';

@Component({
  selector: 'app-painel-atendente',
  imports: [],
  templateUrl: './painel-atendente.html',
  styleUrl: './painel-atendente.css',
})
export class PainelAtendente {
    
    private senhaService = inject(SenhaService);

     private cdr = inject(ChangeDetectorRef);

    proximaSenhaDto: ProximaSenhaDto = {

         codigo: '',
         status: '',
         dataInicioAtendimento:''

    };

     chamarProximaSenha(){
         this.senhaService.proximaSenha()
             
              .subscribe(resposta => {

                this.proximaSenhaDto = resposta;

                this.cdr.detectChanges();

             });
     }


     
}

       
