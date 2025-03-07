


let jogador1 = prompt ('Como você se chama?');
let range = prompt ('Escolha o range que quer adivinha (ex. de 1 a 100). De 1 a:' );

let listaDeNumerosSorteados = [];
let numeroSecreto = GerarNumeroSecreto();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function primeiraMensagem(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', ` ${jogador1}, Escolha um número entre 1 a ${range}`);
}
primeiraMensagem()

function verificarChute(){
    let chute = document.querySelector ('input').value;
    if(numeroSecreto == chute){
        exibirTextoNaTela('h1', `Parabéns ${jogador1} !!`);
        let palavraTentativa =  tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemAcertou = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemAcertou);
        document.getElementById('reiniciar').removeAttribute('disabled');
            } else { 
        if (numeroSecreto < chute) {
            exibirTextoNaTela('h1', 'Tente Novamente!');
            exibirTextoNaTela('p', 'O Número Secreto é MENOR');
    } else {  
               exibirTextoNaTela('h1', 'Tente Novamente!');
               exibirTextoNaTela('p', 'O Número Secreto é MAIOR');

    }
    tentativas++;
    limparCampo();
}
}

function GerarNumeroSecreto() {
   let numeroEscolhido = parseInt(Math.random () * range + 1);
   let quantidadeNumerosLista = listaDeNumerosSorteados.length;
   
   if (quantidadeNumerosLista == range) {
    listaDeNumerosSorteados = [];
    }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return GerarNumeroSecreto();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log (listaDeNumerosSorteados);
    return numeroEscolhido;
   }

}

function limparCampo(){
chute = document.querySelector ('input');
chute.value = '';
}

function reiniciarJogo (){
    numeroSecreto = GerarNumeroSecreto();
    limparCampo()
    tentativas = 1
    primeiraMensagem()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}