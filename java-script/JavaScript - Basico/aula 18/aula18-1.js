// Funcões são como as variáveis. Elas podem receber valores. Elas podem retornar valores. Elas podem receber e retornar valores.

function saudação(nome) { // Uma função de nome saudação, que recebe um parâmetro nome.
    //console.log(`Bom dia! ${nome}`); 
    return `Bom dia! ${nome}`; // Retorna o valor que a função retornar. Se não tiver nenhum valor, retorna undefined. Mas podemos definir um valor padrão como seguinte: return 'valor padrão';
}

// saudação(); // Chamando a função. Pede para o usuário digitar um nome. Não faz nada. A função retornar nada.
saudação('João'); // Chamando a função.

const variavel = saudação('Luiz'); // A variável vai receber o valor que a função retornar.
console.log(variavel);

// --------------------------------------------------------------------------------------------------------------------------------------------------------- //

function soma(x = 1, y = 1) { // Funcão que recebe dois parâmetros. Ele recebe um valor padrão para x e um valor padrão para y.
    const resultado = x + y; // A variável resultado vai receber o valor que a função retornar.
    return resultado; // Retorna o valor que a função retornar. Depois de um return, a função pará de executar.
}

console.log(soma(2, 2)) // Chamando a função.

// Funcões que podem retornar mais de um valor. Elas podem receber e retornar valores. Elas podem ser tratadas como variáveis. Elas podem retornar valores.

//console.log(resultado); // Não conseguimos acessar a variável resultado que está dentro da função.
const resultado = soma(2, 2); // Porém podemos criar uma constante para armazenar o valor que a função retornar.
console.log(resultado);

// --------------------------------------------------------------------------------------------------------------------------------------------------------- //

const raiz = function (n) { // Função anonima que recebe um parâmetro. 
    return n ** 0.5;
}; 
console.log(raiz(9));

const raiz2 = n => n ** 0.5; // Arrow Function, função anonima que recebe um parâmetro. 
console.log(raiz2(9));