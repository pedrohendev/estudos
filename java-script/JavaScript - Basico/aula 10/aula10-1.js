// Operadores aritimeticos + - * / 
// ** = potencia
// + = adicão e concatenação
// % = resto da divisão

// Prioridade () ** * / % + -

// Operadores de icremento e decremento
let num1 = 10;
num1++; // num1 = num1 + 1, num1 = 11
num1--; // num1 = num1 - 1, num1 = 10
num1--; // num1 = num1 - 1, num1 = 9
num1--; // num1 = num1 - 1, num1 = 8 
num1--; // num1 = num1 - 1, num1 = 7
num1--; // num1 = num1 - 1, num1 = 6
console.log(num1);

// Pré incremento ++num1
num1 = 10;
console.log(++num1);

// Pós incremento num1++
num1 = 10;
console.log(num1++);
console.log(num1)

// Operadores de atribuição
const passo = 2;
let contador = 0;
contador += passo; // contador = contador + passo
console.log(contador);

// num1 = '5'; concatenação
num1 = 5;
const num2 = 10;
console.log(num1 + num2);

// NaN = Not a Number
const num3 = 'Ola';
const num4 = 5;
console.log(num3 * num4);

// Converte um numero para um numero inteiro
const num5 = '5';
parseInt('5.2'); // 5
console.log(num5);

// Converte um numero para um numero decimal
const num6 = '5.2';
parseFloat('5.2'); // 5.2
console.log(num6);

// Converte uma string para um numero
const num7 = '5.2';
Number('5.2'); // 5.2
console.log(num7); 