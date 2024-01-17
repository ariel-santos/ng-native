import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { RotasNavegacao } from '../../_enums/rota-navegacao.enum';

@Component({
  selector: 'app-base',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class BaseComponent {
  eRotasNavegacao = RotasNavegacao;
  constructor(
    private router: RouterExtensions
  ) {}

  navegarPara(rota: string): void {
    this.router.navigate([rota])
  }
}
