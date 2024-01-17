import { PassadoPresenteFuturoComponent } from './passado-presente-futuro.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular';
import { PassadoPresenteFuturoRoutingModule } from './passado-presente-futuro-routing.module';



@NgModule({
  declarations: [
    PassadoPresenteFuturoComponent
  ],
  imports: [
    CommonModule,
    PassadoPresenteFuturoRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PassadoPresenteFuturoModule { }
