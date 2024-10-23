let sapato = 70;
let blusa = 29;
let calca = 99;

sapato = aplicarDesconto(sapato)
blusa = aplicarDesconto(blusa)
calca = aplicarDesconto(calca)

console.log(sapato, blusa.toFixed(2), calca.toFixed(2));

function aplicarDesconto(precoOriginal) {
  const precoAtualizado =
    precoOriginal > 50 ? precoOriginal * 0.5 : precoOriginal * 0.7;
  return precoAtualizado;
}
    