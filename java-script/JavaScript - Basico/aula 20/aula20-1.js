// Dados primitivos (valores imutaveis) = number, string, boolean, undefined, null, (bigint, symbol)

// Só trocamos os valor de uma variável não o dado primitivo
let nome = 'Luiz'; // string 
let sobrenome = 'Miranda'; // string
let nomeCompleto = `${nome} ${sobrenome}`; // string

// Não pode mudar o valor de uma variavel primitiva
let nome1 = 'Luiz'; // string
nome1[0] = 'J'; // string
console.log(nome1)

// Valores primitivos são copiados
let a = 'A';
let b = a; // Cópia 
console.log(a, b)

a = 'Outra coisa';
console.log(a, b)   

// Tipo de valor que contém dados mutaveis = array, object, function - Passados por referencia

// Afeta as duas variaveis se eu mudar o valor dentro do array
let c = [1, 2, 3];
let d = [...c]; // Cópia - Spread
let e = c;
console.log(c, d, e)

c.push(4)
console.log(c, d, e)