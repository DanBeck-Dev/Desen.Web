document.getElementById("title").innerHTML = "<h2>Titulo</h2>";
document.getElementById('title').innerText = 'Teste de JavaScript';


function exibir(){
    let nome = document.getElementById("nome").value;
    
    const saudacao = document.createElement("h2");
    saudacao.textContent = "Bom dia, " + nome + "!";
    document.getElementById("formulario").replaceWith(saudacao);
}


function tema(){
    const corpo = document.body;
    let corFundoAtual = getComputedStyle(corpo).backgroundColor;
    if(corFundoAtual == 'rgb(0, 0, 0)'){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementById("tema").style.color = "black"
    }
    else{
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById("tema").style.color = "white"
    }
}

document.getElementById("tema").addEventListener("click", tema);

function aumentarFonte(){
    let corpo = document.body;
    let tamanhofonte = getComputedStyle(corpo).fontSize;
    let tamanhoNumero = parseFloat(tamanhofonte);
    tamanhoNumero += 2;
    corpo.style.fontSize = tamanhoNumero + 'px';
}

let elementosFonte = document.getElementsByClassName("fonte");
for (let i = 0; i < elementosFonte.length; i++) {
    elementosFonte[i].addEventListener("click", aumentarFonte);
}
