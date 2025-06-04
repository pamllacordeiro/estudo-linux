const terminal = document.getElementById("terminal");
const input = document.getElementById("comando");

const desafios = [
  {
    descricao: "💡 Desafio 1: Navegue até a pasta 'documentos'",
    resposta: "cd documentos",
  },
  {
    descricao: "💡 Desafio 2: Crie uma pasta chamada 'projetos'",
    resposta: "mkdir projetos",
  },
  {
    descricao: "💡 Desafio 3: Liste os arquivos da pasta atual",
    resposta: "ls",
  },
];

let desafioAtual = 0;

function mostrarDesafio() {
  terminal.innerHTML += `<div class="desafio">${desafios[desafioAtual].descricao}</div>`;
  terminal.scrollTop = terminal.scrollHeight;
}

function processarComando(comando) {
  terminal.innerHTML += `<div class="linha">$ ${comando}</div>`;

  if (comando.trim() === desafios[desafioAtual].resposta) {
    terminal.innerHTML += `<div class="saida">✅ Correto!</div>`;
    desafioAtual++;
    if (desafioAtual < desafios.length) {
      setTimeout(mostrarDesafio, 1000);
    } else {
      terminal.innerHTML += `<div class="saida">Você concluiu todos os desafios!</div>`;
    }
  } else {
    terminal.innerHTML += `<div class="saida">Comando incorreto. Tente novamente.</div>`;
  }

  input.value = "";
  terminal.scrollTop = terminal.scrollHeight;
}

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    processarComando(input.value);
  }
});

// Inicia o primeiro desafio ao carregar a página
mostrarDesafio();
