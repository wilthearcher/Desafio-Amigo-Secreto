var campo = document.querySelector("input");
var botao = document.querySelector("button");
let amigos = [];

function inserirAmigos(){
    
    if(campo.value == ''){
        alert( "Por favor, insira um nome.");
        return;
    }else{
        amigos.push(campo.value);
        apagarCampo();
        criarLista();
    }
}

function criarLista(){
    let lis = document.createElement('li');
    lis.innerHTML = "";
    
    for (let i = 0; i<amigos.length; i++){
        lis.innerHTML = amigos[i];
        listaAmigos.appendChild(lis);
    }
}

function sortearAmigo(){
    if(amigos.length === 0){
        console.log('array vazio :/')
    }else{
        let indice = Math.floor(Math.random() * amigos.length);
        console.log(indice);

        let texto = document.createElement('p');
        texto.innerHTML = 'VENCEDOR(A)!!';
        vencedor.appendChild(texto);

        let lis = document.createElement('li');
        lis.innerHTML = amigos[indice];
        resultado.appendChild(lis);
    }
}

function apagarCampo(){
    campo.value='';
}

