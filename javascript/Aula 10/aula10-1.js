/*const idade = 16;
let resultado;

if (idade >= 18) {
  resultado = `Aprovado`;
} else {
    resultado = `Reprovado`
}

console.log(resultado)*/

/*let resultado = idade >= 18 ? `Aprovado` : `Reprovado`; 
console.log(resultado)*/

const idade = 16;
const pais = `EUA`;

let resultado =
  idade >= 18
    ? `Aprovado`
    : pais === `EUA` && idade >= 16
    ? `Aprovado`
    : `Reprovado`;

console.log(resultado);
