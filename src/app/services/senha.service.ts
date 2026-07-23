import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SenhaDto } from '../models/senha-dto';
import { ProximaSenhaDto } from '../models/proxima-senha-dto';
import { FinalizarSenhaDto } from '../models/finalizar-senha-dto';

@Injectable({
     providedIn: 'root',
})
export class SenhaService {

     private http = inject(HttpClient);

     private apiUrl = 'http://localhost:8080/api/senha';

     emitirSenha(tipo: string): Observable<SenhaDto> {

          return this.http.post<SenhaDto>(
               `${this.apiUrl}/` + tipo,
               {},
          );
     }

     // proximaSenha():Observable<ProximaSenhaDto>{

     //}

     //finalizarSenha():Observable<FinalizarSenhaDto>{

     //}
}
