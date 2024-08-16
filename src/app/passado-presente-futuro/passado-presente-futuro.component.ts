import { Component } from '@angular/core';
import { BaseComponent } from '../_components/base/base.component';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'app-passado-presente-futuro',
  templateUrl: './passado-presente-futuro.component.html',
  styleUrls: ['./passado-presente-futuro.component.scss']
})
export class PassadoPresenteFuturoComponent extends BaseComponent{
  constructor(
    private routerExtensions: RouterExtensions
  ) {
    super(routerExtensions);
  }
}
