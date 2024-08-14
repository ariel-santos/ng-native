import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { RotasNavegacao } from '../../_enums/rota-navegacao.enum';

@Component({
  selector: 'des-menu-footer',
  templateUrl: './menu-footer.component.html',
  styleUrls: ['./menu-footer.component.css']
})
export class MenuFooterComponent {
  eRotasNavegacao = RotasNavegacao;

  constructor(
    private router: RouterExtensions
  ) {}

  navegar(rota: string) {
    console.log(rota);
    this.router.navigate([rota])
  }
}
