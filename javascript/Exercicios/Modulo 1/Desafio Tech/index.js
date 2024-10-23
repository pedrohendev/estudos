const nome = `Pedro`;
const idade = 17;
const preco = 1800;

const mensagemParaCliente = getMensagemParaCliente(nome, idade);

if (mensagemParaCliente) {
  console.log(mensagemParaCliente);
}

function getMensagemParaCliente(nome, idade) {
  if (idade < 16) {
    return `
        Olá, ${nome}! Obrigado pelo seu interesse em se juntar à
        Autoescola Porto Seguro.
        
        Infelizmente, só aceitamos fazer a matrícula de pessoas com 16 anos ou mais.
    `;
  } else if (idade < 18) {
    const fpreco = preco * 0.6;
    return `
        Olá, ${nome}! Obrigado pelo seu interesse em se juntar à
        Autoescola Porto Seguro.

        Com a sua matrícula antecipada, você pagará apenas ${formataValor(fpreco)}!
    `;
  } else if (idade < 40) {
    return `
        Olá, ${nome}! Obrigado pelo seu interesse em se juntar à
        Autoescola Porto Seguro.

        O valor a ser pago é de ${formataValor(preco)} e você poderá iniciar as
        aulas imediatamente.
    `;
  } else {
    const fpreco = preco * 0.8;
    return `
          Olá, ${nome}! Obrigado pelo seu interesse em se juntar à
          Autoescola Porto Seguro.
  
          Graças à nossa promoção atual, você poderá adquirir nosso serviço por apenas
          ${formataValor(fpreco)} e poderá iniciar as aulas imediatamente.
  `;
  }
}

function formataValor(valor) {
  return `R$${valor.toFixed(2).replace(".", ",")}`;
}
