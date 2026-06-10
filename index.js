const express = require('express');
const app = express();

app.use(express.json());

// Criando uma rota Rest simples
app.get('/api/status', (req, res) => {
  res.status(200).json({ status: 'sucesso', mensagem: 'API Node.js rodando perfeitamente!' });
});

// Exportamos o app para o arquivo de teste poder usá-lo
module.exports = app;

// Só inicia o servidor se não estivermos rodando um teste
if (require.main === module) {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
}