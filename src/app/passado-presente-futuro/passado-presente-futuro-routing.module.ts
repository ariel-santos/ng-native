import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassadoPresenteFuturoComponent } from './passado-presente-futuro.component';


const routes: Routes = [
  { path: '', component: PassadoPresenteFuturoComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassadoPresenteFuturoRoutingModule { }
