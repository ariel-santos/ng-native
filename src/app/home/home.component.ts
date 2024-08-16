import { BaseComponent } from './../_components/base/base.component';
import { FlexboxLayout } from '@nativescript/core';
import { CardService } from './../_services/cards.service';
import { Component, OnInit } from '@angular/core';
import { ListaCardsAcanosMaiores } from '../_services/cards.model';
import { RouterExtensions } from '@nativescript/angular';
import { RotasNavegacao } from '../_enums/rota-navegacao.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit{
  cards: Array<ListaCardsAcanosMaiores> = [];
  cardSelected: ListaCardsAcanosMaiores;

  constructor(
    private cardService: CardService,
    private routerExtensions: RouterExtensions
  ) {
    super(routerExtensions);
  }

  ngOnInit(): void {
    this.cardService.getCards().subscribe(res => {
      this.cards = res;
    });
  }

  selectCard() {
    this.cardSelected = this.cards[Math.floor(Math.random() * this.cards.length)]
  }
}
