const request = require('supertest');
const app = require('./index');

describe('Testes da API Rest', () => {
  it('Deve retornar status 200 e a mensagem de sucesso na rota /api/status', async () => {
    const res = await request(app).get('/api/status');
    
    // O teste verifica se o status HTTP e a mensagem estão corretos
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status', 'sucesso');
  });
});

