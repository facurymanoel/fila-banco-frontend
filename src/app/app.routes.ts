import { Routes } from '@angular/router';
import { Home } from './home/home';
import { EmitirSenha } from './emitir-senha/emitir-senha';
import { PainelAtendente } from './painel-atendente/painel-atendente';


export const routes: Routes = [
    {
      path: '', 
      component: Home 
    },
    {
      path: 'emitir-senha',
      component: EmitirSenha
    },
    {
      path: 'atendente',
      component: PainelAtendente
    },

];
