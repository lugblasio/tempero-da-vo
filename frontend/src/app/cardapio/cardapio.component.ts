import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  template: `<h1>Cardápio Acessível - Tempero da Vó</h1>`
})
export class CardapioComponent {
  // Dados simulando o cardápio com descrições simples para o público 35-60 anos
  itens = [
    { id: 1, nome: 'Prato Feito Frango', preco: 25.00 },
    { id: 2, nome: 'Marmita de Feijoada', preco: 35.00 }
  ];
}
