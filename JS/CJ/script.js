document.getElementById("title").innerHTML = "<h2>Titulo</h2>";
document.getElementById('title').innerText = 'Teste de JavaScript';


function exibir(){
    let nome = document.getElementById("nome").value;
    document.write("Bom Dia " + nome + "!!");
}