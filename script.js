document.addEventListener('DOMContentLoaded', () => {
    const botoesAdicionar = document.querySelectorAll('.adicionar-ao-carrinho');
    const listaCarrinho = document.getElementById('lista-carrinho');
    const totalCarrinho = document.getElementById('total-carrinho');
    let carrinho = [];

    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', () => {
            const nome = botao.getAttribute('data-nome');
            const preco = parseFloat(botao.getAttribute('data-preco'));
            const imagem = botao.getAttribute('data-imagem');

            carrinho.push({ nome, preco, imagem });
            atualizarCarrinho();
        });
    });

    /*function atualizarCarrinho() {
        listaCarrinho.innerHTML = '';
        let total = 0;

        carrinho.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerText = `${item.nome} - $${item.preco.toFixed(2)}`;
            listaCarrinho.appendChild(listItem);
            total += item.preco;
        });

        totalCarrinho.innerText = total.toFixed(2);
    }*/
    function atualizarCarrinho() {
        listaCarrinho.innerHTML = '';
        let total = 0;

        carrinho.forEach(item => {
            const listItem = document.createElement('li');
            const itemHTML = `
                <img src="${item.imagem}" alt="${item.nome}" class="carrinho-imagem">
                <span>${item.nome} - $${item.preco.toFixed(2)}</span>
            `;
            listItem.innerHTML = itemHTML;
            listaCarrinho.appendChild(listItem);
            total += item.preco;
        });

        totalCarrinho.innerText = total.toFixed(2);
    }



});



document.addEventListener('DOMContentLoaded', () => {
    const formularioCurriculo = document.getElementById('formulario-curriculo');
    const curriculoInput = document.getElementById('curriculo');

    formularioCurriculo.addEventListener('submit', (event) => {
        const tamanhoMaximo = 5 * 1024 * 1024; // 5 MB

        if (curriculoInput.files.length === 0) {
            alert('Por favor, selecione um arquivo de currículo.');
            event.preventDefault();
        } else if (curriculoInput.files[0].size > tamanhoMaximo) {
            alert('O tamanho do arquivo de currículo excede o limite de 5MB.');
            event.preventDefault();
        }
    });
});

