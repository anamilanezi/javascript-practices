function desenhaQuadrado(x, y, largura, altura, cor) {

    pincel.fillStyle = cor;
    pincel.fillRect(x, y, largura, altura)
    pincel.fill();
}

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();

}

function desenhaPaletaDeCores() {
    
    desenhaQuadrado(xCor1, yQuadrados, larguraPaleta, alturaPaleta, '#ABDEE6');
    desenhaQuadrado(xCor2, yQuadrados, larguraPaleta, alturaPaleta, '#CBAACB');
    desenhaQuadrado(xCor3, yQuadrados, larguraPaleta, alturaPaleta, '#FFFFB5');
    desenhaQuadrado(xCor4, yQuadrados, larguraPaleta, alturaPaleta, '#FFCCB6');
    desenhaQuadrado(xCor5, yQuadrados, larguraPaleta, alturaPaleta, '#F3B0C3');
    pincel.strokeStyle = '#8FCACA';
    pincel.strokeRect(0,0,800,50)
}

function lidaComMovimentoDoMouse(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if((x >= 0) && (x < (3 * alturaPaleta)) 
        && (y > 0) && (y < alturaPaleta)) {
            desenha = false;
        }

    if(desenha) {

        desenhaCirculo(x, y, 5, corAtual);
    }
}

function habilitaDesenhar() {

    desenha = true;
}

function desabilitaDesenhar() {

    desenha = false;
}

// Para mudar de cor, a pessoa tem que clicar dentro da área do quadrado, e isso muda a corAtual.
function mudaCor(evento) {  

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

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = '#D4F0F0';
pincel.fillRect(0, 0, 800, 600);

var desenha = false;
var corAtual = '#ABDEE6';
var xCor1 = 0;
var xCor2  = 160;
var xCor3 = 320;
var xCor4 = 480;
var xCor5 = 640;
var yQuadrados = 0;
var alturaPaleta = 50;
var larguraPaleta = 160;


/*
var xCor1 = 0;
var xCor2 = 200;
var xCor3 = 400;
var xCor4 = 600;
var xCor5 = 800; 
*/

desenhaPaletaDeCores(); // mostra os quadrados de seleção de cores

tela.onmousemove = lidaComMovimentoDoMouse;

tela.onmousedown = habilitaDesenhar;

tela.onmouseup = desabilitaDesenhar;

tela.onclick = mudaCor;