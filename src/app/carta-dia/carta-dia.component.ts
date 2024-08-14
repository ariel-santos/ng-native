import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { CardService } from '../_services/cards.service';
import { ListaCardsAcanosMaiores } from '../_services/cards.model';
import { RotasNavegacao } from '../_enums/rota-navegacao.enum';
import { BaseComponent } from '../_components/base/base.component';

@Component({
  selector: 'app-carta-dia',
  templateUrl: './carta-dia.component.html',
  styleUrls: ['./carta-dia.component.css']
})
export class CartaDiaComponent extends BaseComponent implements OnInit {
  cardSelected: ListaCardsAcanosMaiores;

  constructor(
    private cardService: CardService,
    private routerExtensions: RouterExtensions
  ) {
    super(routerExtensions);
  }

  ngOnInit(): void {
    this.cardService.getCards().subscribe(res => {
      this.cardSelected = res[Math.floor(Math.random() * res.length)]
    });
  }
}
