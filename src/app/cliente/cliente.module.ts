import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular';
import { ClienteCadastroComponent } from './cadastro/cadastro.component';
import { ClienteContaComponent } from './conta/conta.component';
import { ClienteRoutingModule } from './cliente-routing.module';


@NgModule({
  declarations: [
    ClienteCadastroComponent,
    ClienteContaComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ClienteModule { }
