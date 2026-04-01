function saudacao(nomeJogador){
    console.log("Bem Vindo ao Jogo, " + nomeJogador + "!")
}

saudacao("Maryana");

//Função que recebe um valor
function subirDeNivel(nivelAtual){
    return nivelAtual +1;
}

let meuNivel = 10;

let niveAtualizado = subirDeNivel(meuNivel);

console.log('Seu novo nível:' + niveAtualizado);