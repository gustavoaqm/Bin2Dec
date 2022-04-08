var binario = document.getElementById('numBinario');
var result = document.getElementById('resultado');

binario.addEventListener('keyup', calcular);
function calcular()
{
    var dec = parseInt(binario.value, 2);

    if (binario.value == "" || !/^[01]+$/.test(binario.value)) {
    	result.innerHTML = "<h2> Insira um número binário </h2>";
    }
    else{
		console.log(dec);
		result.innerHTML = "<h2> Resultado: " + dec + "</h2>";
    }
}