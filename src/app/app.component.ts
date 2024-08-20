import { Component, OnInit } from '@angular/core';
import { GoogleSignin } from '@nativescript/google-signin';
import { ClienteService } from './_services/cliente.service';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  constructor (
    private clienteService: ClienteService
  ){}
  async ngOnInit() {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      const cliente = GoogleSignin.getCurrentUser();
      this.clienteService.setCliente({
        nome: cliente.displayName,
        email: cliente.email
      });
    }

    this.clienteService.login$.next(isSignedIn);
  }
}
