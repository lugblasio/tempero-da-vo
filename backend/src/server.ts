import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Simulação de Banco de Dados de Produtos
const cardapio = [
  { id: 1, nome: "PF da Vó (Frango)", preco: 25.00, img: "url_da_foto" },
  { id: 2, nome: "Feijoada Pequena", preco: 35.00, img: "url_da_foto" }
];

// Rota de Teste
app.get('/cardapio', (req, hres) => {
  return hres.json(cardapio);
});

// RN-01 e RN-02: Lógica de Pedido e Fidelidade
app.post('/pedidos', (req, res) => {
  const { itens, total } = req.body;

  // Regra de Negócio: Pedido Mínimo de R$ 20,00
  if (total < 20) {
    return res.status(400).json({ error: "O valor mínimo para entrega é R$ 20,00" });
  }

  // Regra de Negócio: Cálculo de Fidelidade (1 ponto a cada R$ 10)
  const pontosGanhos = Math.floor(total / 10);

  return res.json({
    status: "Pedido recebido pela cozinha da Dona Beatriz!",
    pontosFidelidade: pontosGanhos,
    resumo: itens
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
