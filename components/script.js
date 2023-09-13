/*function evento(){
    var inp = window.document.getElementById('texto').value;
    var resposta = window.document.getElementById('recebe');

    resposta.innerText = `${inp}`;
}*/

window.document.getElementById('botao').addEventListener('click', function() {
    var nome = prompt("Digite o seu nome");
    alert (nome);
    var imp = document.getElementById('texto').value; 
    var res = document.getElementById('recebe');


    res.innerHTML = `${imp}, ${nome}`;
})

window.document.getElementById('btnEvent').addEventListener('click', function() {
    alert("deu certo");
})


/*const qdro = document.getElementById('qdro');
qdro.onclick = function(){
    qdro.classList.toggle('ativo');
}*/

function toggle(){
    var quadro  = document.getElementById('qdro');
    quadro.classList.toggle('ativo');
}