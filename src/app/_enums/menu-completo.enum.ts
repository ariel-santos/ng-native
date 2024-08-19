import {RotasNavegacao} from './rota-navegacao.enum';

const MENU_COMPLETO = [
  {
    nome: 'Cadastre-se',
    rota: RotasNavegacao.CLIENTE_CADASTRO,
    iconeCode: '0xf683',
    iconeClass: 'fas',
    logado: false
  },
  {
    nome: 'Conta',
    rota: RotasNavegacao.CLIENTE_CONTA,
    iconeCode: '0xf683',
    iconeClass: 'fas',
    logado: true
  },
  {
    nome: 'Configurações',
    rota: RotasNavegacao.CLIENTE_CONTA,
    iconeCode: '0xf013',
    iconeClass: 'fas',
    logado: false
  },
  {
    nome: 'Sair',
    rota: '',
    iconeCode: '0xf08b',
    iconeClass: 'fas',
    logado: true
  }
];

export {
  MENU_COMPLETO
}
