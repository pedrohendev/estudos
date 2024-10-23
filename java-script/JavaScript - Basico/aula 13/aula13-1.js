// let umaString = 'Um \"texto\"'; // Aspas duplas dentro de aspas duplas 
// let umaString1 = "Um \\texto"; // Barra invertida

// console.log(umaString);

//               01234567
let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString.charAt(3)); // pega o caractere na posição 3 
console.log(umaString[4]); // pega o caractere na posição 4 

// concatena o texto
console.log(umaString.concat(" em um lindo dia.")); // concatena o texto
console.log(umaString + " em um lindo dia."); // concatena o texto
console.log(`${umaString} em um lindo dia.`); // concatena o texto

// indexOf = pega o indice do primeiro caractere
console.log(umaString.indexOf("texto")); // pega o indice do primeiro caractere "texto"

// lastIndexOf = pega o indice do último caractere
console.log(umaString.lastIndexOf("texto")); // pega o indice do último caractere "texto"
console.log(umaString.lastIndexOf("U", 7)); // pega o indice do último caractere "U" a partir da posição 7

// match = encontra letras ou palavras dentro do texto 
console.log(umaString.match('Um')); // encontra a palavra "Um"
console.log(umaString.match(/[a-z]/g)); // encontra todas as letras minusculas

// replace = substitui palavras ou letras dentro do texto
console.log(umaString.replace('Um',"Tudo")); // substitui a palavra "Um" por "Tudo"
console.log(umaString.replace('Um',"Tudo").replace('texto',"dia")); // substitui a palavra "Um" por "Tudo" e "texto" por "dia"

// length = pega o tamanho do texto
console.log(umaString.length); // pega o tamanho do texto

// slice = corta o texto
console.log(umaString.slice(0, 3)); // corta o texto da posição 0 a 3
console.log(umaString.slice(0, umaString.length)); // corta o texto da posição 0 ao final
console.log(umaString.slice(0, umaString.length - 1)); // corta o texto da posição 0 ao penultimo caractere

// substring = corta o texto
console.log(umaString.substring(0, 3)); // corta o texto da posição 0 a 3
console.log(umaString.substring(0, umaString.length)); // corta o texto da posição 0 ao final
console.log(umaString.substring(0, umaString.length - 1)); // corta o texto da posição 0 ao penultimo caractere

// split = corta o texto
console.log(umaString.split(' ')); // corta o texto em pedaços separados por espaços
console.log(umaString.split(' ', 2)); // corta o texto em pedaços separados por espaços e retorna os 2 primeiros
console.log(umaString.split(' ', 3)); // corta o texto em pedaços separados por espaços e retorna os 3 primeiros

// toLowerCase = pega o texto em minuscula
// toUpperCase = pega o texto em maiuscula
console.log(umaString.toLowerCase()); // pega o texto em minuscula
console.log(umaString.toUpperCase()); // pega o texto em maiuscula
