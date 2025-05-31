const listaSalvos = [];

function buscarlivro() {
    const inputlivro = document.getElementById("input_livro");
    const valorlivro = inputlivro.value;
    console.log("buscando livro " + valorlivro);
    fetch("https://brasilapi.com.br/api/isbn/v1/" + valorlivro)
      .then((resposta) => {
        return resposta.json();
      })
}

function exibirInformacoesDoLivro(dados) {
    
    const livroInfo = document.getElementById("livro_info").value.trim();
    const livro_info = document.getElementById ("input_livro")
    livroInfo.innerHTML = "";


    document.getElementById("acoes").style.display = "block";
}


function salvarLivro(livro) {
    livrosSalvos.push(livro);  
       
}


function clicarSalvar() {
    const inputlivro = document.getElementById("input_livro");
    const valorlivro = inputlivro.value;
}  


function configurarEventos() {
    const inputlivro = document.getElementById("input_livro");
    inputlivro.addEventListener("focusout", buscarlivro);
  
    const botaoSalvar = document.getElementById("salvar_livro");
    botaoSalvar.addEventListener("click", clicarSalvar)
  }
  
  window.addEventListener("load", configurarEventos);