/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('./app.js');

const request = supertest(app);
describe('Эндпоинты откликаются на запросы', () => {
  it('Возвращает сообщение "Запрашиваемый ресурс не найден" на get к "/api/speech"', () => request.get('/api/speech').then((response) => {
    expect(response.body.message).toBe('Запрашиваемый ресурс не найден');
  }));
  it('Возвращает сообщение "Запрашиваемый ресурс не найден" на get к "/api"', () => request.get('/api').then((response) => {
    expect(response.body.message).toBe('Запрашиваемый ресурс не найден');
  }));
  it('Возвращает html на /', () => request.get('/').then((response) => {
    expect(response.status).toBe(200);
  }));
});
