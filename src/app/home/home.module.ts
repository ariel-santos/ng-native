import { HomeComponent } from './home.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular';
import { HeaderAppModule } from '../_components/header-app/header-app.module';
import { MenuFooterModule } from '../_components/menu-footer/menu-footer.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderAppModule,
    MenuFooterModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule { }
