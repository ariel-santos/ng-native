import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaDiaRoutingModule } from './carta-dia-routing.module';
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular';
import { CartaDiaComponent } from './carta-dia.component';


@NgModule({
  declarations: [
    CartaDiaComponent
  ],
  imports: [
    CommonModule,
    CartaDiaRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CartaDiaModule { }
