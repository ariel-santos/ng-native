import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { CardService } from '../_services/cards.service';
import { ListaCardsAcanosMaiores } from '../_services/cards.model';
import { RotasNavegacao } from '../_enums/rota-navegacao.enum';

@Component({
  selector: 'app-carta-dia',
  templateUrl: './carta-dia.component.html',
  styleUrls: ['./carta-dia.component.scss']
})
export class CartaDiaComponent {
  cardSelected: ListaCardsAcanosMaiores;
  eRotasNavegacao = RotasNavegacao;

  constructor(
    private cardService: CardService,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit(): void {
    this.cardService.getCards().subscribe(res => {
      this.cardSelected = res[Math.floor(Math.random() * res.length)]
    });
  }
  navegarPara(rota: string): void {
    this.routerExtensions.navigate([rota])
  }
}
