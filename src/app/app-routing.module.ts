import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { ItemsComponent } from './item/items.component'
import { RotasNavegacao } from './_enums/rota-navegacao.enum'
import { ItemDetailComponent } from './item/item-detail.component'

const routes: Routes = [
  {
    path: RotasNavegacao.HOME,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: RotasNavegacao.CARTA_DIA,
    loadChildren: () => import('./carta-dia/carta-dia.module').then(m => m.CartaDiaModule)
  },
  {
    path: RotasNavegacao.SELECIONAR_CARTA,
    loadChildren: () => import('./selecionar-carta/seleciona-carta.module').then(m => m.SelecionarCartaModule)
  },
  {
    path: RotasNavegacao.PASSADO_PRESENTE_FUTURO,
    loadChildren: () => import('./passado-presente-futuro/passado-presente-futuro.module').then(m => m.PassadoPresenteFuturoModule)
  },
  {
    path: '',
    redirectTo: RotasNavegacao.HOME,
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
