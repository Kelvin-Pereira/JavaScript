const calculadora = {
    somar: function() { return 1+1},
    multiplicar: function(valor) { return valor * 2 },
}

const somar = calculadora.somar;
console.log(somar());

const multiplicar = calculadora.multiplicar
console.log(multiplicar(4));

// para rodar node app.js