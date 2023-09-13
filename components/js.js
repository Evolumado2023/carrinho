/*var num1 = parseFloat(window.document.getElementById('num1').value);
var num2 = parseFloat(window.document.getElementById('num2').value);

function somar(){
    alert(num1 + num2);
}*/

function obterValores() {
    var num1Input = document.getElementById('num1');
    var num2Input = document.getElementById('num2');
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    return { num1, num2 };
}

function somar() {
    var { num1, num2 } = obterValores();
    var resultado = num1 + num2;
    alert('A soma é: ' + resultado);
}

function subtrair() {
    var { num1, num2 } = obterValores();
    var resultado = num1 - num2;
    alert('A subtração é: ' + resultado);
}

function multiplicar() {
    var { num1, num2 } = obterValores();
    var resultado = num1 * num2;
    alert('A multiplicação é: ' + resultado);
}

function dividir() {
    var { num1, num2 } = obterValores();
    if (num2 !== 0) {
        var resultado = num1 / num2;
        alert('A divisão é: ' + resultado);
    } else {
        alert('Não é possível dividir por zero.');
    }
}

