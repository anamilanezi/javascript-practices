function desenhaQuadrado(x, y, largura, altura, cor) {

    pincel.fillStyle = cor;
    pincel.fillRect(x, y, largura, altura)
    pincel.fill();
}

function desenharCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();

}

function desenharPaletaDeCores() {
    
    desenhaQuadrado(xCor1, yQuadrados, larguraPaleta, alturaPaleta, '#ABDEE6');
    desenhaQuadrado(xCor2, yQuadrados, larguraPaleta, alturaPaleta, '#CBAACB');
    desenhaQuadrado(xCor3, yQuadrados, larguraPaleta, alturaPaleta, '#FFFFB5');
    desenhaQuadrado(xCor4, yQuadrados, larguraPaleta, alturaPaleta, '#FFCCB6');
    desenhaQuadrado(xCor5, yQuadrados, larguraPaleta, alturaPaleta, '#F3B0C3');
    pincel.strokeStyle = '#8FCACA';
    pincel.strokeRect(0,0,800,50)
}

function lidarComMovimentoDoMouse(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if((x >= 0) && (x < (5 * larguraPaleta)) 
        && (y > 0) && (y < alturaPaleta)) {
            desenha = false;
        }

    if(desenha) {

        desenharCirculo(x, y, raio, corAtual);
    }
}

function habilitarDesenho() {

    desenha = true;
}

function desabilitarDesenho() {

    desenha = false;
}

function mudarCor(evento) {  

    var x = evento.pageX - tela.offsetLeft;   
    var y = evento.pageY - tela.offsetTop;

    if((x >= xCor1) 
        && (x < xCor1 + larguraPaleta)
        && (y >= yQuadrados)
        && (y < alturaPaleta)) {
            corAtual = '#ABDEE6';
            console.log('cor1');
        }

    if((x >= xCor2) 
        && (x < xCor2 + larguraPaleta)
        && (y >= yQuadrados)
        && (y < alturaPaleta)) {
            corAtual = '#CBAACB';
            console.log('cor2');
        }

    if((x >= xCor3) 
        && (x < xCor3 + larguraPaleta)
        && (y >= yQuadrados)
        && (y < alturaPaleta)) {
            corAtual = '#FFFFB5';
            console.log('cor3');
        }

    if((x >= xCor4) 
        && (x < xCor4 + larguraPaleta)
        && (y >= yQuadrados)
        && (y < alturaPaleta)) {
            corAtual = '#FFCCB6';
            console.log('cor4');
        }
    if((x >= xCor5) 
        && (x < xCor5 + larguraPaleta)
        && (y >= yQuadrados)
        && (y < alturaPaleta)) {
            corAtual = '#F3B0C3';
            console.log('cor5');
        }        
}

function limparTela() {
    pincel.fillStyle = '#f0f8ff';
    pincel.fillRect(0, 50, 800, 600);
    return false;
}

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = '#f0f8ff';
pincel.fillRect(0, 0, 800, 600);

var desenha = false;
var raio = 5;
var corAtual = '#ABDEE6';
var xCor1 = 0;
var xCor2  = 160;
var xCor3 = 320;
var xCor4 = 480;
var xCor5 = 640;
var yQuadrados = 0;
var alturaPaleta = 50;
var larguraPaleta = 160;

desenharPaletaDeCores(); // mostra os quadrados de seleção de cores

tela.onmousemove = lidarComMovimentoDoMouse;

tela.onmousedown = habilitarDesenho;

tela.onmouseup = desabilitarDesenho;

tela.onclick = mudarCor;

tela.oncontextmenu = limparTela;