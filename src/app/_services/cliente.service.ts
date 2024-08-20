import { ListaCardsAcanosMaiores } from './cards.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cliente } from '../_services/cliente.model';

@Injectable({
  providedIn: 'root',
})

export class ClienteService {
  login$ = new BehaviorSubject(false);

  googleAccessToken: string;
  cliente: Cliente;

  // getLogin() : boolean {
  //   return this.login;
  // }
  // setLogin(status: boolean) {
  //   return this.login = status;
  // }

  getGoogleAccessToken() : string {
    return this.googleAccessToken;
  }
  setGoogleAccessToken(status: string) {
    return this.googleAccessToken = status;
  }
  getCliente() : Cliente {
    return this.cliente;
  }
  setCliente(value: Cliente) {
    return this.cliente = value;
  }

  // getLoginCliente() {
  //   return this.estaLogado;
  // }
  // setLoginCliente(status: boolean) {
  //   return this.estaLogado = status;
  // }
}
