const nome = ``;

if (nome) {
  console.log(`Fala aê, ` + nome);
} else {
  console.log(`Fala aê gente fina!`);
}

console.log(typeof nome);

// truthy e falsy

// Falsy: false, 0, strings vazias, null, undefined, NaN
// Truthy: todo o resto

console.log(!!0);
console.log(!!`0`);
console.log(!!123);
console.log(!!NaN);
console.log(!!null);
console.log(!!undefined);
console.log(!![]);
console.log(!!{});
