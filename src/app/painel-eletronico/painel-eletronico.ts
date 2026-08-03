import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { SenhaService } from '../services/senha.service';
import { ProximaSenhaDto } from '../models/proxima-senha-dto';
import { interval } from 'rxjs';
 

@Component({
  selector: 'app-painel-eletronico',
  templateUrl: './painel-eletronico.html',
  styleUrl: './painel-eletronico.css',
})
export class PainelEletronico {

  private senhaService = inject(SenhaService);

  private cdr = inject(ChangeDetectorRef);

  private audio = new Audio('assets/audio/bip.mp3');

  audioLiberado = false;

  senhaAtual: ProximaSenhaDto = {

    codigo: '',
    status: '',
    dataInicioAtendimento: ''

  };

  ngOnInit() {

    this.buscarSenha();

    interval(3000).subscribe(() => {

      this.buscarSenha();
    });
  }

  liberarAudio() {

    this.audio.play()
         .then(() =>{

           this.audio.pause();
           this.audio.currentTime = 0;

           this.audioLiberado = true;

         })
         .catch(erro => console.log(erro));
  }

  buscarSenha() {

    this.senhaService.buscarSenhaAtual()
      .subscribe(resposta => {

        if (this.senhaAtual.codigo !== resposta.codigo) {

          this.senhaAtual = resposta;

          if(this.audioLiberado){
              
             this.audio.currentTime = 0;
             this.audio.play();
          }

         this.cdr.detectChanges();

        }

      });

  }


}
