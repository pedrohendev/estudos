const nome = "Pedro";
const sobrenome = "Henrique";
const idade = 19;
const peso = 69;
const alturaEmM = 1.69;
let IMC = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2024 - idade;

console.log(
  `${nome} ${sobrenome} tem ${idade}, pesa ${peso}kg 
tem ${alturaEmM} de altura e seu IMC é de ${IMC}
${nome} ${sobrenome} nasceu em ${anoNascimento}.`
);
