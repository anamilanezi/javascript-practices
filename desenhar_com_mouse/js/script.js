function desenharQuadrado(x, y, largura, altura, cor) {

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
    
    desenharQuadrado(xCor1, yQuadrados, larguraPaleta, alturaPaleta, '#ABDEE6');
    desenharQuadrado(xCor2, yQuadrados, larguraPaleta, alturaPaleta, '#CBAACB');
    desenharQuadrado(xCor3, yQuadrados, larguraPaleta, alturaPaleta, '#FFFFB5');
    desenharQuadrado(xCor4, yQuadrados, larguraPaleta, alturaPaleta, '#FFCCB6');
    desenharQuadrado(xCor5, yQuadrados, larguraPaleta, alturaPaleta, '#F3B0C3');
    pincel.strokeStyle = '#8FCACA';
    pincel.strokeRect(0,0,800,50) // Borda do retângulo superior
}

function desenharRaios() {
    var corRaio = '#FFFFB5';
    desenharQuadrado(0, 550, 800, 500, '#CBAACB');
    desenharCirculo(120, 575, 5, corRaio);
    desenharCirculo(240, 575, 10, corRaio);
    desenharCirculo(400, 575, 15, corRaio);
    desenharCirculo(560, 575, 20, corRaio);
    desenharCirculo(720, 575, 24, corRaio);
    pincel.strokeStyle = '#8FCACA';    
    pincel.strokeRect(0,550,800,50) // borda do retângulo inferior
        
}

function escreverTexto(texto, x, y, cor) {
    pincel.font='15px Georgia';
    pincel.fillStyle = cor;
    pincel.fillText(texto, x, y);
}

function inserirBorracha() {    
    escreverTexto('BORRACHA', 9, 578, '#FEE1E8');
    pincel.strokeStyle = 'white';
    pincel.strokeRect(6,558,90,30)
}

function inserirElementos() {
    desenharPaletaDeCores();
    desenharRaios();
    inserirBorracha();

}

function lidarComMovimentoDoMouse(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if((x >= 0) && (x < 800) 
        && (y > 0) && (y < 55)) {
            desenha = false;
        }

    if((x >= 0) && (x < 800)
        && (y > 542) && (y < 600)) {
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
            console.log('Cor = #ABDEE6');
        }

    if((x >= xCor2) 
        && (x < xCor2 + larguraPaleta)
        && (y >= yQuadrados)
        && (y < alturaPaleta)) {
            corAtual = '#CBAACB';
            console.log('Cor = #CBAACB');
        }

    if((x >= xCor3) 
        && (x < xCor3 + larguraPaleta)
        && (y >= yQuadrados)
        && (y < alturaPaleta)) {
            corAtual = '#FFFFB5';
            console.log('Cor = #FFFFB5');
        }

    if((x >= xCor4) 
        && (x < xCor4 + larguraPaleta)
        && (y >= yQuadrados)
        && (y < alturaPaleta)) {
            corAtual = '#FFCCB6';
            console.log('Cor = #FFCCB6');
        }
    if((x >= xCor5) 
        && (x < xCor5 + larguraPaleta)
        && (y >= yQuadrados)
        && (y < alturaPaleta)) {
            corAtual = '#F3B0C3';
            console.log('Cor = #F3B0C3');
        }
    if((x >= 6) && (x < 96) 
        && (y >= 558) && (y<=588)) { //(6,558,90,30)
        corAtual = '#D4F0F0';
        console.log(x, y);
    }
}

function mudarRaio(evento) {
    var xRaio = evento.pageX - tela.offsetLeft;   
    var yRaio = evento.pageY - tela.offsetTop;

    if((xRaio >= 115) 
    && (xRaio <= 125)
    && (yRaio >= 570)
    && (yRaio <= 580)) {
        raio = 5;
        console.log('Raio = 5');
    }

    if((xRaio >= 230) 
    && (xRaio <= 250)
    && (yRaio >= 565)
    && (yRaio <= 585)) {
        raio = 10;
        console.log('Raio = 10');
    }

    if((xRaio >= 385) 
    && (xRaio <= 415)
    && (yRaio >= 560)
    && (yRaio <= 590)) {
        raio = 15;
        console.log('Raio = 15');
    }

    if((xRaio >= 540) 
    && (xRaio <= 580)
    && (yRaio >= 555)
    && (yRaio <= 595)) {
        raio = 20;
        console.log('Raio = 20');
    }

    if((xRaio >= 695) 
    && (xRaio <= 745)
    && (yRaio >= 550)
    && (yRaio <= 600)) {
        raio = 25;
        console.log('Raio = 25');
    }
}

function limparTela() {
    pincel.fillStyle = '#D4F0F0';
    pincel.fillRect(0, 50, 800, 500);
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

inserirElementos();

tela.onmousemove = lidarComMovimentoDoMouse;

tela.onmousedown = habilitarDesenho;

tela.onmouseup = desabilitarDesenho;

tela.onclick = mudarCor; 

tela.ondblclick = mudarRaio;

tela.oncontextmenu = limparTela;