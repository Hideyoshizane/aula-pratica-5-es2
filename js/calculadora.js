class Calculadora {
    static somar(a, b) {
      return a + b;
    }
  
    static subtrair(a, b) {
      return a - b;
    }
  
    static multiplicar(a, b) {
      return a * b;
    }
  
    static dividir(a, b) {
      return a / b;
    }
  
    static raizQuadrada(a) {
      return Math.sqrt(a);
    }
  
    static potencia(base, expoente) {
      return Math.pow(base, expoente);
    }
  }
  
  module.exports = Calculadora;