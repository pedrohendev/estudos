// arrays = estrutura de dados que permite armazenar mais de um valor
// array é uma lista

// objetos = estrutura de dados que permite armazenar mais de um valor
// objeto é uma coleção de propriedades 

//               0123456789
// const nome = 'Luiz';
// console.log(nome[3])
// console.log(alunos)

//               0       1        2          3       4
const alunos = ['Luiz', 'Maria', 'João']; // Luiza e Eduardo
console.log(typeof alunos) // object
console.log(alunos instanceof Array) // true

alunos.push('Luiza');
alunos.push('Eduardo');

console.log(alunos.slice(0, -1)); // fazendo um corte do array

// delete alunos[1]; // deletando o valor da posicao 1, ele ficara sem valor
// console.log(alunos[1]);

// const removidoFim = alunos.pop(); // a função pop remove o valor da ultima posicao
// const removidoComeco = alunos.shift(); // a função shift remove o valor da primeira posicao

// alunos.unshift('Luiza'); // a função unshift adiciona o valor na primeira posicao 
// alunos.unshift('Fábio'); // a função unshift adiciona o valor na primeira posicao
// alunos.push('Luiza'); // a função push adiciona o valor na ultima posicao
// alunos.push('Fábio'); // a função push adiciona o valor na ultima posicao

// alunos[alunos.length] = 'Luiza';
// alunos[alunos.length] = 'Eduardo'; 
// alunos[alunos.length] = 'Leticia';

// alunos[0] = 'Eduardo'; // modificando o valor da posicao 0 
// alunos[3] = 'Luiza'; // adicionando um novo valor na posicao 3
// console.log(alunos[0]);

// console.log(alunos);
// console.log(alunos[0]);
// console.log(alunos[2]);


