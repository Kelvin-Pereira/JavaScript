const autores = [{nome: "Alan"},{nome:"kelvin"},{nome:"wesley"}];

function imprimirAutores() {
    setTimeout(function(){
        let saida = '';
        for(let i in autores) {
            saida += `<li>${autores[i].nome}</li>`
        }
        document.querySelector('ul').innerHTML = saida;
    },1000)
}

function adicionarAutore(autor, callback) {
    setTimeout(function(){
        autores.push(autor);
        callback();
    },3000);
}

function formulario() {
    event.preventDefault();

    let autor = {nome: event.target[0].value};

    adicionarAutore(autor, imprimirAutores);
    

    event.target[0].value = '';
}