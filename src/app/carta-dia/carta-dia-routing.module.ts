import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartaDiaComponent } from './carta-dia.component';


const routes: Routes = [
  { path: '', component: CartaDiaComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartaDiaRoutingModule { }
