import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { RotasNavegacao } from './_enums/rota-navegacao.enum'

const routes: Routes = [
  {
    path: RotasNavegacao.HOME,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: RotasNavegacao.MENU_COMPLETO,
    loadChildren: () => import('./menu-completo/menu-completo.module').then(m => m.MenuCompletoModule)
  },
  {
    path: RotasNavegacao.CLIENTE,
    loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)
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
