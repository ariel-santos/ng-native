import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { RotasNavegacao } from '../../_enums/rota-navegacao.enum';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'des-menu-footer',
  templateUrl: './menu-footer.component.html',
  styleUrls: ['./menu-footer.component.scss']
})
export class MenuFooterComponent extends BaseComponent {
  constructor(
    private routerExtensions: RouterExtensions
  ) {
    super(routerExtensions);
  }
}
