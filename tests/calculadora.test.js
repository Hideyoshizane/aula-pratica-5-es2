const Calculadora = require('./calculadora');

test('Adição', () => {
  expect(Calculadora.somar(2, 3)).toBe(5);
});

test('Subtração', () => {
  expect(Calculadora.subtrair(5, 3)).toBe(2);
});

test('Multiplicação', () => {
  expect(Calculadora.multiplicar(4, 2)).toBe(8);
});

test('Divisão', () => {
  expect(Calculadora.dividir(10, 2)).toBe(5);
});

test('Raiz quadrada', () => {
  expect(Calculadora.raizQuadrada(16)).toBe(4);
});

test('Potência', () => {
  expect(Calculadora.potencia(2, 3)).toBe(8);
});