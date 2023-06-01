const { JSDOM } = require('jsdom');
const fs = require('fs');

const html = fs.readFileSync('./index.html', 'utf-8');
const { window } = new JSDOM(html);

const displayResult = window.document.querySelector('input[name="displayResult"]');

test('Addition', () => {
  calcNumbers('7');
  expect(displayResult.value).toBe('7');

  calcNumbers('+');
  expect(displayResult.value).toBe('7+');

  calcNumbers('8');
  expect(displayResult.value).toBe('7+8');

  displayResult.value = eval(displayResult.value);
  expect(displayResult.value).toBe('15');
});

test('Subtraction', () => {
  calcNumbers('9');
  expect(displayResult.value).toBe('9');

  calcNumbers('-');
  expect(displayResult.value).toBe('9-');

  calcNumbers('4');
  expect(displayResult.value).toBe('9-4');

  displayResult.value = eval(displayResult.value);
  expect(displayResult.value).toBe('5');
});

test('Multiplication', () => {
  calcNumbers('2');
  expect(displayResult.value).toBe('2');

  calcNumbers('*');
  expect(displayResult.value).toBe('2*');

  calcNumbers('3');
  expect(displayResult.value).toBe('2*3');

  displayResult.value = eval(displayResult.value);
  expect(displayResult.value).toBe('6');
});

test('Division', () => {
  calcNumbers('8');
  expect(displayResult.value).toBe('8');

  calcNumbers('/');
  expect(displayResult.value).toBe('8/');

  calcNumbers('2');
  expect(displayResult.value).toBe('8/2');

  displayResult.value = eval(displayResult.value);
  expect(displayResult.value).toBe('4');
});

test('Addition with decimal number', () => {
  calcNumbers('3');
  expect(displayResult.value).toBe('3');

  calcNumbers('.');
  expect(displayResult.value).toBe('3.');

  calcNumbers('5');
  expect(displayResult.value).toBe('3.5');

  calcNumbers('+');
  expect(displayResult.value).toBe('3.5+');

  calcNumbers('2');
  expect(displayResult.value).toBe('3.5+2');

  displayResult.value = eval(displayResult.value);
  expect(displayResult.value).toBe('5.5');
});

function calcNumbers(result) {
  if (result === '=') {
    displayResult.value = eval(displayResult.value);
  } else {
    displayResult.value = displayResult.value + result;
  }
}
