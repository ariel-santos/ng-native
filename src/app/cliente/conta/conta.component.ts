import { Component, OnInit } from '@angular/core';
import { GoogleSignin } from '@nativescript/google-signin';
import { registerElement } from '@nativescript/angular';
import { ClienteService } from '../../_services/cliente.service';
import { RotasNavegacao } from '../../_enums/rota-navegacao.enum';
import { Router } from '@angular/router';

registerElement(
  'GoogleSignInButton',
  () => require('@nativescript/google-signin').GoogleSignInButton
)

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.scss']
})
export class ClienteContaComponent implements OnInit {

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ){
  }

  fazerLogin(){
    console.log('fazerLogin');
  }

  async ngOnInit() {
    try {
      await GoogleSignin.configure({});
    } catch (e) {}
  }

  async googleSignin() {
    const user = await GoogleSignin.signIn();
    if (user && user.accessToken){
      this.clienteService.setGoogleAccessToken(user.accessToken);
      const cliente = GoogleSignin.getCurrentUser();
      this.clienteService.setCliente({
        nome: cliente.displayName,
        email: cliente.email
      });

      this.clienteService.login$.next(true);
      this.router.navigate([RotasNavegacao.HOME]);
    }
  }
}
