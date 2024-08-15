import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderAppModule } from './_components/header-app/header-app.module'
import { MenuFooterModule } from './_components/menu-footer/menu-footer.module'

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptCommonModule,
    NativeScriptModule,
    AppRoutingModule,
    HeaderAppModule,
    MenuFooterModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
