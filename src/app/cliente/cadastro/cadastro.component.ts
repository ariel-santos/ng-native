import { Component } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { GoogleSignin } from '@nativescript/google-signin';

registerElement(
  'GoogleSignInButton',
  () => require('@nativescript/google-signin').GoogleSignInButton
)

try {
  await GoogleSignin.configure({});
} catch (e) {}


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class ClienteCadastroComponent {

  async yourGoogleSigninFunction() {
    const user = await GoogleSignin.signIn();
  }
}
