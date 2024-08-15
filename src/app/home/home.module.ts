import { HomeComponent } from './home.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule { }
