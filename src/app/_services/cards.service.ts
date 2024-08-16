import { ListaCardsAcanosMaiores } from './cards.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  cartaDia: ListaCardsAcanosMaiores;

  getCards(): Observable<Array<ListaCardsAcanosMaiores>> {
    return new Observable(observer => {
      observer.next([
        {
          arcanoMaior: 'O Louco	',
          positivo: 'Viagem, liberdade, inocencia',
          negativo: 'imaturidade, mentiroso, sem rumo',
        }, {
          arcanoMaior: 'O Mago',
          positivo: 'Ação, Novidades, poder',
          negativo: 'manipulador, trapaceiro, mau planejamento',
        }, {
          arcanoMaior: 'A Sacerdotisa',
          positivo: 'Sabedoria, misterio, oculto',
          negativo: 'falsidade, segredos, amantes',
        }, {
          arcanoMaior: 'A Imperatriz',
          positivo: 'Comunicação, fertilidade, realizações',
          negativo: 'excesso de vaidade, controladora',
        }, {
          arcanoMaior: 'O Imperador',
          positivo: 'Proteção, segurança, estabilidade',
          negativo: 'centralizador, inflexível, teimoso',
        }, {
          arcanoMaior: 'O Hierofante',
          positivo: 'Aconselhamento, estudos, tradição',
          negativo: 'preconceitos, tabus, rigidez',
        }, {
          arcanoMaior: 'Os Amantes',
          positivo: 'Escolhas, relacionamentos, amor',
          negativo: 'duvidas, decisões, dualidade',
        }, {
          arcanoMaior: 'O Carro',
          positivo: 'Controle, rumo, oportunidades',
          negativo: 'mudanças rápidas, falta de controle, oposição',
        }, {
          arcanoMaior: 'A Força',
          positivo: 'Sensualidade, coragem, autocontrole',
          negativo: 'recuar, falta de autocontrole, emoção bruta',
        }, {
          arcanoMaior: 'O Eremita',
          positivo: 'Reclusão, paciência, estudos',
          negativo: 'solidão, avareza, isolamento',
        }, {
          arcanoMaior: 'A Roda da Fortuna',
          positivo: 'Viagem, mudança inesperada, destino',
          negativo: 'instabilidade, perder controle, azar',
        }, {
          arcanoMaior: 'A Justiça',
          positivo: 'Negociações legais, reconciliação, ser justo',
          negativo: 'frieza, ser injusto, desonestidade',
        }, {
          arcanoMaior: 'O Enforcado',
          positivo: 'Estagnação, sacrifício, deixar ir',
          negativo: 'jogos, estagnação, indecisão',
        }, {
          arcanoMaior: 'A Morte',
          positivo: 'Transformação, mudança, fim de ciclo',
          negativo: 'perdas, destruição, resistência à mudança',
        }, {
          arcanoMaior: 'A Temperança',
          positivo: 'Equilibrio, harmonia, moderação',
          negativo: 'lentidão, paciência, desequilibrio',
        }, {
          arcanoMaior: 'O Diabo',
          positivo: 'Tentação, material, sexualidade',
          negativo: 'vícios, obsessões, falta de controle',
        }, {
          arcanoMaior: 'A Torre',
          positivo: 'Ruptura, perda, destruição',
          negativo: 'reconstrução, adiar o inevitável, trauma',
        }, {
          arcanoMaior: 'A Estrela',
          positivo: 'Esperança, inspiração, espiritualidade',
          negativo: 'ingenuidade, má fé, desanimo',
        }, {
          arcanoMaior: 'A Lua',
          positivo: 'Ilusão, duvidas, fertilidade',
          negativo: 'traição, decepção, medos',
        }, {
          arcanoMaior: 'O Sol',
          positivo: 'Alegria, realizações, gravidez',
          negativo: 'tristeza, insatisfação, desmotivar',
        }, {
          arcanoMaior: 'O Julgamento',
          positivo: 'Renovação, Renascimento, resgate',
          negativo: 'ciclo vicioso, esperar por ajuda divina',
        }, {
          arcanoMaior: 'O Mundo',
          positivo: 'Viagem, sucesso, conclusão',
          negativo: 'estagnação, planos fracassados, fim de ciclo'
        }
      ])
    });
  }
  getCartaDia() {
    return this.cartaDia;
  }
  setCartaDia(value: ListaCardsAcanosMaiores) {
    this.cartaDia = value;
  }
}
