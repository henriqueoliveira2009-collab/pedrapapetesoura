let pontosJogado=0;
let pontosComputador=0;
const opcoes=["pedra","papel","tesoura"];

const botoes=document.querySelectorAll(".botao-opcao");
const placarJogador=document.getElementById("pontos-jogador");
const placarComputador=document.getElementById("pontos-computador");
const escolhaJogador=document.getElementById("escolha-jogador");
const escolhaComputador=documentElementById("escolhaComputador");
const mensagemResultador=documentElementById("mensagem-resultador");
const botaoReiniciar=documentElementById("botao-reniciar");

function escolhaAleatoria(){
    const indice = Math.floor(Math.random()*opcoes.length);
    return opcoes[indice];
}

function verificarVencedor(jogador,computador){
    if(jogador===computador){
        return"Empate!";
    }
    if(
        (jogador==="pedra"&&computador==="tesoura")||
        (jogador==="papel"&&computador==="pedra")||
        (jogador==="tesoura"&&computador==="papel")
    ){
        pontosJogador++;
        return "Você venceu! ";
    }
    pontosComputador++;
    return "Computador venceu!";
            
}

function atualizarPlacar(){
    placarJogador.textContent = pontosJogador;
    placarComputador.textContent = pontosComputador;
}
function jogar(escolha){
    const escolhaDoComputador = escolhaAleatoria();
    
    const resultudo = verificarVencedor(
        escolhaDoComputador
);
escolhaJogador.textContent = escolha;

escolhaComputador.textContent = escolhaDoComputador;

mensagemResultado.textContent = resultudo;

atualizarPlacar();
}
botoes.forEach(function(botao) {
    botao.addEventListener("click",function(){
    const escolha = botao.dataset.escolha;
    
    jogar(escolha);
    });
});

function reniciarJogo(){

    pontosJogador=0;
    pontosComputador=0;
    atualizarPlacar();
    escolhaJogador.textContent="-"
    escolhaComputador.textContent="-"
    mensagemResultador.textContent="Faça sua escolha!";
}