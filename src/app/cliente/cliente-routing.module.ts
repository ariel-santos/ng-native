import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteCadastroComponent } from './cadastro/cadastro.component'
import { ClienteContaComponent } from './conta/conta.component'

const routes: Routes = [
  { path: 'cadastro', component: ClienteCadastroComponent },
  { path: 'conta', component: ClienteContaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
