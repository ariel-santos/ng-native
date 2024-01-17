import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelecionarCartaComponent } from './selecionar-carta.component';


const routes: Routes = [
  { path: '', component: SelecionarCartaComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelecionarCartaRoutingModule { }
