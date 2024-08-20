import { Component, OnInit } from '@angular/core';
import { GoogleSignin } from '@nativescript/google-signin';
import { ClienteService } from '../../_services/cliente.service';
import { Cliente } from '../../_services/cliente.model';
import { Router } from '@angular/router';
import { RotasNavegacao } from '../../_enums/rota-navegacao.enum';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.component.html',
})
export class ClienteSairComponent implements OnInit {
  constructor(
    private clienteService: ClienteService,
    private router: Router
  ){}

  async ngOnInit() {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      await GoogleSignin.signOut();
      this.clienteService.setCliente(new Cliente());
      this.clienteService.login$.next(false);
      this.router.navigate([RotasNavegacao.HOME]);
    }
  }
}
