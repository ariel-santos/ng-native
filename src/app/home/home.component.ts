import { FlexboxLayout } from '@nativescript/core';
import { CardService } from './../_services/cards.service';
import { Component, OnInit } from '@angular/core';
import { ListaCardsAcanosMaiores } from '../_services/cards.model';
import { RouterExtensions } from '@nativescript/angular';
import { RotasNavegacao } from '../_enums/rota-navegacao.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  cards: Array<ListaCardsAcanosMaiores> = [];
  cardSelected: ListaCardsAcanosMaiores;
  eRotasNavegacao = RotasNavegacao;

  constructor(
    private cardService: CardService,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit(): void {
    this.cardService.getCards().subscribe(res => {
      this.cards = res;
    });
  }

  selectCard() {
    this.cardSelected = this.cards[Math.floor(Math.random() * this.cards.length)]
  }

  navegarPara(rota: string): void {
    this.routerExtensions.navigate([rota])
  }

}
