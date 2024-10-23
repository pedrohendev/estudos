let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const array = [varA, varB, varC];

varA = array[1]
varB = array[2]
varC = array[0]

console.log(varA, varB, varC);