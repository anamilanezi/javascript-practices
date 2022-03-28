 
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d')

    var width = 1000;
    var height = 700;

    var cores = ['#FF6FFF', '#AF69EE', '#29AB87', '#6693F5', '#7fffd4', '#CBAACB', '#FFCCB6', '#F3B0C3', '#FF968A'];

    var mensagens = ['Vem pra Cloud Girls!', 'Vamos juntas!', 'Vamos galera, mulheres!',
                     'Juntas somos mais fortes!', 'Nunca é tarde para sonhar!', 'Acredite em você!']
   
    var indiceCor = 0;
    var indiceMensagem = 0;

    var x;
    var y;
    var xRetangulo = 120;
    var yRetangulo = 70;
   
    function pintarFundo() {
        pincel.fillStyle = '#D4F0F0'
        pincel.fillRect(0,0,width,height)
    }

// Cria função para alterar a cor da nuvem
    function mudarCor() {
        
        indiceCor++;
        
        if(indiceCor >= cores.length) {       
            indiceCor = 0;
        }
        return false;
    }

// Cria função para alterar a mensagem
function mudarMensagem() {
        
    indiceMensagem++;
    
    if(indiceMensagem >= mensagens.length) {       
        indiceMensagem = 0;
    }
    return false;
}

// Cria função que muda índice de cor e mensagem
function mudarIndices() {
    mudarCor();
    mudarMensagem();
}

// Cria função para desenhar circulos individuais
    function desenharCirculo (x, y) {  
        pincel.fillStyle =  cores[indiceCor];
        pincel.beginPath();
        pincel.arc(x, y, 25, 0 , 2 * 3.14);
        pincel.fill();

    }

//Cria função para escrever texto
    function desenharTexto(texto, x , y, cor) {   //
        var tela = document.querySelector('canvas');
        var pincel = tela.getContext('2d');

        pincel.font='20px Georgia';
        pincel.fillStyle= cor;
        pincel.fillText(texto, x, y);    
    }
    
// Cria função que limpa a tela
    function limparTela() {
        pincel.fillStyle = '#D4F0F0'
        pincel.fillRect(0,0,width,height)
    }

// Cria função para sorter coordenadas
function sorteiaCoordenadas(maximo) {
    return (Math.floor(Math.random() * maximo) - 30)
}

// Cria função que desenha as nuvens em posição aleatória
function desenharNuvem() {

    limparTela();

    x = sorteiaCoordenadas(width); // Atribui o ponto X do clique (offset é para compensar o espaço à esquerda (left) da tela)
    y = sorteiaCoordenadas(height); // Atribui o ponto Y do clique (compensando o espaço do topo)

    desenharCirculo(x, y);                    // 1                 2
    desenharCirculo(x + 70, y - 50);          // 2            1         3
    desenharCirculo(x + 140, y);              // 3                 4
    desenharCirculo(x + 70, y + 50);          // 4

    desenharCirculo(x + 30, y - 30);          // A
    desenharCirculo(x + 110, y - 30);         // B             A      B
    desenharCirculo(x + 30, y + 30);          // C             C      D
    desenharCirculo(x + 110, y + 30);         // D
    
    pincel.fillRect(x + 10,y - 30, 120, 70);  // Retângulo que preenche o centro da nuvem

    desenharTexto("Turma 8", x + 30, y - 10, 'white');    // Criar o texto
    desenharTexto("Cloud Girls", x + 20, y + 10, 'white');
    }

// Cria função para acertar na nuvem
function acertarNuvem(evento) {

    var xClique = evento.pageX - tela.offsetLeft;   
    var yClique = evento.pageY - tela.offsetTop;
    console.log(x,y)

    if((xClique >= x) 
        && (xClique < x + xRetangulo) 
        && (yClique > y - 30)
        && (yClique < y + yRetangulo)){
            mudarCor();
            alert(mensagens[indiceMensagem]);
            mudarMensagem();
                      
    }
}

    pintarFundo();
    tela.oncontextmenu = mudarIndices;
    tela.onclick = acertarNuvem;
    setInterval(desenharNuvem, 1250);


