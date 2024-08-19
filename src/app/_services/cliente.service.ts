import { ListaCardsAcanosMaiores } from './cards.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  // possuiCadastro = false;
  login = false;

  getLogin() : boolean {
    return this.login;
  }
  setLogin(status: boolean) {
    return this.login = status;
  }

  // getLoginCliente() {
  //   return this.estaLogado;
  // }
  // setLoginCliente(status: boolean) {
  //   return this.estaLogado = status;
  // }
}
