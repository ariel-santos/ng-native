import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuCompletoComponent } from './menu-completo.component';

const routes: Routes = [
  { path: '', component: MenuCompletoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuCompletoRoutingModule { }
