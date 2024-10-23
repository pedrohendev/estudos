// objetos = estrutura de dados que permite armazenar mais de um valor
// objeto é uma coleção de propriedades

// Nós não podemos mudar as contantes mas podemos modificar os valores que estiver dentro do array/objeto
// const array = [0, 1, 2, 3, 4, 5];
// array.push(4)
// array[0] = 'Luiz';
// array = 'Outra coisa'; // Não podemos mudar o valor de uma constante
// console.log(array);

// objetos
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    falar() {
        console.log(`Ola, eu sou ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`); // this é uma palavra reservada para referenciar o objeto que estiver dentro do objeto pessoa1
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa1.falar()
pessoa1.incrementaIdade()
pessoa1.falar()
pessoa1.incrementaIdade()
pessoa1.falar()
pessoa1.incrementaIdade()
pessoa1.falar()

function criaPessoa(nome, sobrenome, idade) { // parametros
    return { nome, sobrenome, idade };   // return um objeto
}

const pessoa2 = criaPessoa('Luiz', 'Miranda', 25); // argumentos
const pessoa3 = criaPessoa('Pedro', 'Henrique', 19);
const pessoa4 = criaPessoa('Henrique', 'Fábio', 24);
const pessoa5 = criaPessoa('João', 'Moreira', 43);

console.log(pessoa3.nome, pessoa3.sobrenome, pessoa3.idade);

