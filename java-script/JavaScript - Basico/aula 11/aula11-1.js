// alert = alerta = exibe: Não retorna valor
// prompt = prompta = perguntar: Retorna valor 
// confirm = confirmar = confirma: Retorna valor

// const confirma = confirm('Realmente deseja apagar?');
// console.log(confirma);

let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número:');

let resultado = Number(num1) + Number(num2);
alert(`O resultado da soma é: ${resultado}`);

// Templete strings = `` dentro dela podemos ultilizar variáveis dentro ${variavel}