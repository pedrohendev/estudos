const numero = Number(prompt('Digite um número'));
const texto = document.getElementById('texto')

texto.innerHTML = `
    <h2>Seu numero é: ${numero}</h2> <br>
    <p>Raiz quadrada: ${(numero ** 0.5)}</p> <br>
    <p>${numero} é inteiro: ${Number.isInteger(numero)}</p> <br>
    <p>É NaN: ${Number.isNaN(numero)}</p> <br>
    <p>Arredondando para baixo: ${Math.floor(numero)}</p> <br>
    <p>Arredondando para cima: ${Math.ceil(numero)}</p> <br>
    <p>Com duas casas decimais: ${numero.toFixed(2)}</p>
    `