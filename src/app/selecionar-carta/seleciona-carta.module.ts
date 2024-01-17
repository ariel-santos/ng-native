import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular';
import { SelecionarCartaRoutingModule } from './selecionar-carta-routing.module';
import { SelecionarCartaComponent } from './selecionar-carta.component';

@NgModule({
  declarations: [
    SelecionarCartaComponent
  ],
  imports: [
    CommonModule,
    SelecionarCartaRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SelecionarCartaModule { }
