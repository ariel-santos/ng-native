import { Component } from '@angular/core';
import { BaseComponent } from '../_components/base/base.component';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'app-selecionar-carta',
  templateUrl: './selecionar-carta.component.html',
  styleUrls: ['./selecionar-carta.component.scss']
})
export class SelecionarCartaComponent extends BaseComponent{
  constructor(
    private routerExtensions: RouterExtensions
  ) {
    super(routerExtensions);
  }
}
