import { Component, OnInit } from '@angular/core';
import { Dialogs } from '@nativescript/core';
import { BaseComponent } from '../_components/base/base.component';
import { RouterExtensions } from '@nativescript/angular';
import { Router } from '@angular/router';
import {MENU_COMPLETO} from '../_enums/menu-completo.enum';
import { ClienteService } from './../_services/cliente.service';
@Component({
  selector: 'app-menu-completo',
  templateUrl: './menu-completo.component.html',
  styleUrls: ['./menu-completo.component.scss']
})
export class MenuCompletoComponent extends BaseComponent implements OnInit{
  menuItens = MENU_COMPLETO;
  login = false;

  constructor(
    private routerExtensions: RouterExtensions,
    private router2: Router,
    private clienteService: ClienteService
  ) {
    super(routerExtensions);
  }

  ngOnInit(): void {
    this.login = this.clienteService.getLogin();
    this.menuItens = this.menuItens.filter(menu=> menu.logado == this.login);

    // Dialogs.alert({
    //   title: 'Menu Completo!',
    //   message: 'Please try again later.',
    //   okButtonText: 'OK',
    //   cancelable: true,
    // });
  }
}
