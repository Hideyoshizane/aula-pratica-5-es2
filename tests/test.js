const { JSDOM } = require('jsdom');
const fs = require('fs');

const html = fs.readFileSync('./index.html', 'utf-8');
const { window } = new JSDOM(html);

const displayResult = window.document.querySelector('input[name="displayResult"]');

// Test addition
test('Addition', () => {
  calcNumbers('2');
  expect(displayResult.value).toBe('2');
  
  calcNumbers('+');
  expect(displayResult.value).toBe('2+');
  
  calcNumbers('3');
  expect(displayResult.value).toBe('2+3');
  
  displayResult.value = eval(displayResult.value);
  expect(displayResult.value).toBe('5');
});

// Test subtraction
test('Subtraction', () => {
  calcNumbers('8');
  expect(displayResult.value).toBe('8');
  
  calcNumbers('-');
  expect(displayResult.value).toBe('8-');
  
  calcNumbers('4');
  expect(displayResult.value).toBe('8-4');
  
  displayResult.value = eval(displayResult.value);
  expect(displayResult.value).toBe('4');
});

// Add more test cases for multiplication, division, and other operations

function calcNumbers(result) {
  displayResult.value = displayResult.value + result;
}
