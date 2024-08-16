import { Component, OnInit } from '@angular/core';
import { Dialogs } from '@nativescript/core';

@Component({
  selector: 'app-menu-completo',
  templateUrl: './menu-completo.component.html',
  styleUrls: ['./menu-completo.component.scss']
})
export class MenuCompletoComponent implements OnInit{
  menuItens = [
    { nome: 'Conta', rota: '', icone: '' },
    { nome: 'titulo 2', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'titulo 3', rota: '', icone: '' },
    { nome: 'Configurações', rota: '', icone: '' },
    { nome: 'Sair', rota: '', icone: '' }
  ];

  constructor( 
  ) {

  }

  ngOnInit(): void {
    // Dialogs.alert({
    //   title: 'Menu Completo!',
    //   message: 'Please try again later.',
    //   okButtonText: 'OK',
    //   cancelable: true,
    // });
  }
}
