import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { RouterExtensions } from '@nativescript/angular';
import { UtilsEnum } from '../../_enums/utils.enum'
@Component({
  selector: 'des-header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.scss']
})
export class HeaderAppComponent extends BaseComponent {
  eUtilsEnum = UtilsEnum;

  constructor(
    private routerExtensions: RouterExtensions
  ) {
    super(routerExtensions);
  }
}
