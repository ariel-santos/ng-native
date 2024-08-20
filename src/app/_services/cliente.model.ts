export class Cliente {
  nome: string;
  email: string;

  constructor(nome?: string, email?: string) {
    this.nome = nome ? nome : '';
    this.email = email ? email : '';
  }
}
