import { Component, inject, ChangeDetectorRef, resourceFromSnapshots } from '@angular/core';

import { SenhaService } from '../services/senha.service';
import { ProximaSenhaDto } from '../models/proxima-senha-dto';
import { FinalizarSenhaDto } from '../models/finalizar-senha-dto';

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
          dataInicioAtendimento: ''

     };

     finalizarSenhaDto: FinalizarSenhaDto = {

          codigo: '',
          status: '',
          dataFimAtendimento: ''
     }

     chamarProximaSenha() {
          this.senhaService.proximaSenha()

               .subscribe(resposta => {

                    this.proximaSenhaDto = resposta;

                    this.cdr.detectChanges();

               });
     }

     finalizarSenha() {

          this.senhaService.finalizarSenha()

               .subscribe(resposta => {

                   this.proximaSenhaDto.status = resposta.status;

                   this.proximaSenhaDto.dataInicioAtendimento = '';

                    this.cdr.detectChanges();
               });
     }





}


