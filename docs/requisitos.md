# Documentação de Requisitos - Tempero da Vó

## 1. Requisitos Funcionais (RF)
* **RF-01:** O sistema deve exibir o cardápio com descrições simples e preços claros.
* **RF-02:** O sistema deve permitir ao cliente adicionar itens ao carrinho.
* **RF-03:** O sistema deve calcular automaticamente os pontos de fidelidade.
* **RF-04:** O sistema deve validar o valor mínimo de compra para entrega.

## 2. Requisitos Não Funcionais (RNF)
* **RNF-01 (Acessibilidade):** Interface deve seguir princípios WCAG (Perceptível, Operável, Compreensível).
* **RNF-02 (Linguagem):** O backend deve ser desenvolvido em Node.js com TypeScript.
* **RNF-03 (Performance):** Respostas da API devem ocorrer em menos de 2 segundos.

## 3. Regras de Negócio (RN)
* **RN-01:** Pedido mínimo para delivery é de R$ 20,00.
* **RN-02:** O cliente ganha 1 ponto de fidelidade a cada R$ 10,00 gastos.
