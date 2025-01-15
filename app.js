//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
var da = document.getElementById('resultado');
var ul = document.getElementById('listaAmigos');
var amigos = [];

function adicionarAmigo() {
    da.innerHTML = '';
    var amigo = document.getElementById('amigo').value;
    if (amigo == ""){
        return alert('Digite um nome');
    }
    amigos.push(amigo);

    document.getElementById('amigo').value = '';
    ul.innerHTML = '';
    for (obj of amigos){
        var li = document.createElement('li');
        li.innerHTML = obj;
        ul.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length == 0)
        return alert('Nenhum amigo foi adicionado');
    if (amigos.length < 2)
        return alert('Adicione mais amigos');
    var amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    ul.innerHTML = '';
    da.innerHTML = "o vencedor é: " + amigoSecreto + "!!!";
    amigos = [];
}
