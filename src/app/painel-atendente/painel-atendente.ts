import { Component, inject, ChangeDetectorRef, resourceFromSnapshots } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SenhaService } from '../services/senha.service';
import { ProximaSenhaDto } from '../models/proxima-senha-dto';
import { FinalizarSenhaDto } from '../models/finalizar-senha-dto';

@Component({
     selector: 'app-painel-atendente',
     imports: [CommonModule],
     templateUrl: './painel-atendente.html',
     styleUrl: './painel-atendente.css',
})
export class PainelAtendente {

     mensagemErro: string = '';

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

               .subscribe({

                    next: resposta => {

                         this.proximaSenhaDto = resposta;
                         this.cdr.detectChanges();

                    },

                    error: erro => {

                         this.mensagemErro = erro.error;

                         this.cdr.detectChanges();

                         console.log(erro.error);
                    }

               });
     }

     finalizarSenha() {

          this.senhaService.finalizarSenha()

               .subscribe(resposta => {

                    this.proximaSenhaDto.status = resposta.status;

                    this.proximaSenhaDto.dataInicioAtendimento = '';

                    this.mensagemErro = '';

                    this.cdr.detectChanges();
               });
     }

     abrirPainelEletronico() {
          window.open('/painel', '_blank');
     }





}


