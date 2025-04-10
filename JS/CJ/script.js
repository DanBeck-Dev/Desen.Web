document.getElementById("title").innerHTML = "<h2>Titulo</h2>";
document.getElementById('title').innerText = 'Teste de JavaScript';


function exibir(){
    let nome = document.getElementById("nome").value;
    
    const saudacao = document.createElement("h2");
    saudacao.textContent = "Bom dia, " + nome + "!";
    document.getElementById("formulario").replaceWith(saudacao);

}

function dark(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

function light(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

document.getElementById("dark").addEventListener("click", dark);
document.getElementById("light").addEventListener("click", light);