import { Component, OnInit } from '@angular/core';
import { Dialogs } from '@nativescript/core';
import { BaseComponent } from '../_components/base/base.component';
import { RouterExtensions } from '@nativescript/angular';
import { Router } from '@angular/router';
import {MENU_COMPLETO} from '../_enums/menu-completo.enum';
import { ClienteService } from './../_services/cliente.service';
import { GoogleSignin } from '@nativescript/google-signin';

@Component({
  selector: 'app-menu-completo',
  templateUrl: './menu-completo.component.html',
  styleUrls: ['./menu-completo.component.scss']
})
export class MenuCompletoComponent extends BaseComponent implements OnInit{
  menuItens = MENU_COMPLETO;

  constructor(
    private routerExtensions: RouterExtensions,
    private router2: Router,
    private clienteService: ClienteService
  ) {
    super(routerExtensions);
  }

  ngOnInit(): void {
    this.clienteService.login$.subscribe(res => {
      if (!res) {
        this.menuItens = this.menuItens.filter(menu=> menu.logado == res);
      }
    })

    // Dialogs.alert({
    //   title: 'Menu Completo!',
    //   message: 'Please try again later.',
    //   okButtonText: 'OK',
    //   cancelable: true,
    // });
  }
}
