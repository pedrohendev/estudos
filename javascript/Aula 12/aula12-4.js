let nome = `Carlos`;

function darUmAlo(nome = `rapaziada`, periodo) { // parametro
  console.log(`E aê, ${nome || `rapaziada`}!, boa ${periodo}`);
}

function darUmTchauzinho(nome) {
  console.log(`Até mais, ${nome}!`);
}   

//darUmAlo(`josé`);
//darUmTchauzinho(`josé`);

darUmAlo(nome, `tarde`); // argumento    

