// IEEE 754-2008 = 32 bits (4 bytes)

let num1 = 0.7; // number
let num2 = 0.1; // number

num1 += num2; // num1 = num1 + num2
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
num1 += num2; // 1.5
num1 += num2; // 1.6
num1 += num2; // 1.7
num1 += num2; // 1.8
num1 += num2; // 1.9
num1 += num2; // 2.0


// quando usamos o operador += com um numero, ele automaticamente chama o metodo valueOf() que retorna o valor primitivo do numero
// em seguida, o JS faz a soma e atribui o resultado a variavel num1
// como o resultado da soma entre 0.7 + 0.1 + 0.1 + 0.1 = 0.4, o valor de num1 passa a ser 0.4
// em seguida, o parseFloat() recebe o valor de num1 e o converte para um numero, usando o toFixed(2) para arredondar o numero e limitar a quantidade de casas decimais para 2
// o resultado final e 0.40
num1 = parseFloat(num1.toFixed(2));

//num1 = ((num1 * 100) + (num2 * 100)) / 100; // outra forma de resolver o problema de arredondamento de casas decimais

console.log(num1);
console.log(Number.isInteger(num1))

//  num1 = num1.toString() // converte para string permanente
//  console.log(typeof num1);

//  console.log(num1.toString(2)); // converte para binário
//  console.log(num1.toFixed(2)); // arredonda e coloca a quantidade de casas decimais que quisermos
//  console.log(Number.isInteger(num1)); // verifica se é um número inteiro

// let temp = num1 + '5'; 
// console.log(temp);
// console.log(Number.isNaN(temp)); // verifica se é um NaN