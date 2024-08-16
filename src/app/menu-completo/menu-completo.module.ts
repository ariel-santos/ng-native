import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular';
import { MenuCompletoRoutingModule } from './menu-completo-routing.module';
import { MenuCompletoComponent } from './menu-completo.component';



@NgModule({
  declarations: [
    MenuCompletoComponent
  ],
  imports: [
    CommonModule,
    MenuCompletoRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MenuCompletoModule { }
