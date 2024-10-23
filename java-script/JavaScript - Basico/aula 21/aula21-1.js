function meuEscopo() { 
    const form = document.querySelector('.form');
    const res = document.querySelector('#res');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        res.innerHTML = `<p>Os seus dados foram enviados com sucesso!</p>`;
    }    

    form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();