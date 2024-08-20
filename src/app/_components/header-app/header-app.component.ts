import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { RouterExtensions } from '@nativescript/angular';
import { UtilsEnum } from '../../_enums/utils.enum'
import { ClienteService } from '../../_services/cliente.service';
const BOAS_VINDAS = 'Faça seu cadastro para ter todos os beneficios';

@Component({
  selector: 'des-header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.scss']
})
export class HeaderAppComponent extends BaseComponent implements OnInit {
  msgLogin = 'Faça seu cadastro para ter todos os beneficios';
  login = false;
  eUtilsEnum = UtilsEnum;

  constructor(
    private routerExtensions: RouterExtensions,
    private clienteService: ClienteService
  ) {
    super(routerExtensions);
  }

  ngOnInit() {
    this.clienteService.login$.subscribe(res => {
      if (res) {
        this.msgLogin = `Bem vindo ${this.clienteService.getCliente().nome}.`;
      } else {
        this.msgLogin = BOAS_VINDAS;
      }
    });
  }
}
