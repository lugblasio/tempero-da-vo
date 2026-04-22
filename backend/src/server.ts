import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// RN-01: Pedido mínimo de R$ 20,00 e RN-02: Fidelidade (1 ponto a cada R$ 10)
app.post('/pedidos', (req: Request, res: Response) => {
  const { total, itens } = req.body;

  if (total < 20) {
    return res.status(400).json({ erro: "Valor mínimo do pedido: R$ 20,00" });
  }

  const pontosFidelidade = Math.floor(total / 10);

  return res.json({
    mensagem: "Pedido enviado para a cozinha do Tempero da Vó!",
    pontosGanhos: pontosFidelidade,
    resumo: itens
  });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
