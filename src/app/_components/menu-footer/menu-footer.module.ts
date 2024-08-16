
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuFooterComponent } from './menu-footer.component';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';


@NgModule({
  declarations: [
    MenuFooterComponent
  ],
  imports: [
    CommonModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule
  ],
  exports: [
    MenuFooterComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MenuFooterModule { }
