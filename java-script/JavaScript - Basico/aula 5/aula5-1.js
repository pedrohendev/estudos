let nomePai = "Pedro"; // String
let nomeMae = "Rayssa";
let nomeFilho = "João Miguel";

console.log(`${nomePai} nasceu em 1984.`);
console.log(`Em 2000 ${nomePai} conheceu ${nomeMae}.`);
console.log(`João casou-se com ${nomePai} em 2012.`);
console.log(`Maria teve um filho com ${nomePai} em 2015.`);
console.log(`O filho de ${nomePai} se chama ${nomeFilho}.`);

let nome; // Declarou a variavel mas não deu um valor a ela
nome = "Qualquer"; // Inicializando a variavel
console.log(nome); // Undefined
nome = `Pedro`; // mudou de valor
console.log(nome);

// Não podemos usar palavras reservadas: let, var, const, if etc

// Variaveis precisam ter nomes significativos
let n = "João";
console.log(n);
let nomeCliente = "João";

// Não pode começar o nome de uma variavel com um numero
// let 1n;

// Não pode conter espaços ou traços
// let nome Cliente;

// Ultilizamos camelCase
let nomeCompletoDoCliente = "Pedro Henrique";

// case-sensitive
let cliente = "pedro";
let Cliente = "pedro";

// Não podemos redeclarar variaveis com let
let nomeDoCliente = "pedro";
//let nomeDoCliente = 'joão' 
nomeDoCliente = "joão";

// NÃO ULTILIZE VAR, ULTILIZE LET
