import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { SenhaService } from '../services/senha.service';
import { ProximaSenhaDto } from '../models/proxima-senha-dto';

@Component({
  selector: 'app-painel-eletronico',
  imports: [],
  templateUrl: './painel-eletronico.html',
  styleUrl: './painel-eletronico.css',
})
export class PainelEletronico {

  private senhaService = inject(SenhaService);

  private cdr = inject(ChangeDetectorRef);

  senhaAtual: ProximaSenhaDto = {

    codigo: '',
    status: '',
    dataInicioAtendimento: ''

  };

  ngOnInit() {

    this.buscarSenha();
  }

  buscarSenha() {

    this.senhaService.buscarSenhaAtual()
      .subscribe(resposta => {

        this.senhaAtual = resposta;

        this.cdr.detectChanges();

      });

  }


}
