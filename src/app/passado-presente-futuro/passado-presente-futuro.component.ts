import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../_components/base/base.component';
import { RouterExtensions } from '@nativescript/angular';
import { CardService } from '../_services/cards.service';
import { UtilService } from '../_services/util.service';
import { ListaCardsAcanosMaiores } from '../_services/cards.model';
const LIMITE_CARTAS_SELECIONADAS = 3;

@Component({
  selector: 'app-passado-presente-futuro',
  templateUrl: './passado-presente-futuro.component.html',
  styleUrls: ['./passado-presente-futuro.component.scss']
})
export class PassadoPresenteFuturoComponent extends BaseComponent implements OnInit {
  cartas: Array<ListaCardsAcanosMaiores>;
  cartasSelecionadas = [];
  mostrarResultado = false;

  constructor(
    private routerExtensions: RouterExtensions,
    private cardService: CardService,
    private utilService: UtilService
  ) {
    super(routerExtensions);
  }
  ngOnInit(): void {
    this.getCartas();
  }

  getCartas() {
    this.cardService.getCards().subscribe(res => {
      this.cartas = this.utilService.embaralharArray(res);
    });
  }

  selecionarCarta(carta) {
    this.cartasSelecionadas.push(carta);

    if (this.cartasSelecionadas.length === LIMITE_CARTAS_SELECIONADAS){
      this.mostrarResultado = true;
    } else {
      carta.revelada = true;
    }
  }
}
