import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { SenhaService } from '../services/senha.service';
import { ProximaSenhaDto } from '../models/proxima-senha-dto';
import { interval } from 'rxjs';

@Component({
  selector: 'app-painel-eletronico',
  imports: [],
  templateUrl: './painel-eletronico.html',
  styleUrl: './painel-eletronico.css',
})
export class PainelEletronico {

  private senhaService = inject(SenhaService);

  private cdr = inject(ChangeDetectorRef);

  private audio = new Audio('assets/audio/bip.mp3');

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

  buscarSenha() {

    this.senhaService.buscarSenhaAtual()
      .subscribe(resposta => {

        if (this.senhaAtual.codigo !== resposta.codigo) {

          this.senhaAtual = resposta;

          this.audio.currentTime = 0;
          this.audio.play();

          this.cdr.detectChanges();

        }

      });

  }


}
