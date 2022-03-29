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

function desenharRaios() {
    desenharCirculo(80, 25, 5, '#D4F0F0');
    desenharCirculo(240, 25, 10, '#D4F0F0');
    desenharCirculo(400, 25, 15, '#D4F0F0');
    desenharCirculo(560, 25, 20, '#D4F0F0');
    desenharCirculo(720, 25, 24, '#D4F0F0');
    
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

function mudarRaio(evento) {
    var xRaio = evento.pageX - tela.offsetLeft;   
    var yRaio = evento.pageY - tela.offsetTop;

    if((xRaio >= 75) 
    && (xRaio <= 85)
    && (yRaio >= 20)
    && (yRaio <= 30)) {
        raio = 5;
        console.log('Raio = 5');
    }

    if((xRaio >= 230) 
    && (xRaio <= 250)
    && (yRaio >= 15)
    && (yRaio <= 35)) {
        raio = 10;
        console.log('Raio = 10');
    }

    if((xRaio >= 385) 
    && (xRaio <= 415)
    && (yRaio >= 10)
    && (yRaio <= 40)) {
        raio = 15;
        console.log('Raio = 15');
    }

    if((xRaio >= 540) 
    && (xRaio <= 580)
    && (yRaio >= 5)
    && (yRaio <= 45)) {
        raio = 20;
        console.log('Raio = 20');
    }

    if((xRaio >= 695) 
    && (xRaio <= 745)
    && (yRaio >= 0)
    && (yRaio <= 50)) {
        raio = 25;
        console.log('Raio = 25');
    }
}

function limparTela() {
    pincel.fillStyle = '#D4F0F0';
    pincel.fillRect(0, 50, 800, 600);
    return false;
}

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle ='#D4F0F0';
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



desenharPaletaDeCores();

desenharRaios();

tela.onmousemove = lidarComMovimentoDoMouse;

tela.onmousedown = habilitarDesenho;

tela.onmouseup = desabilitarDesenho;

tela.onclick = mudarCor; 

tela.ondblclick = mudarRaio;

tela.oncontextmenu = limparTela;