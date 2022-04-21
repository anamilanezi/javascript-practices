// Substituir um texto do HTML usando JavaScript

var titulo = document.querySelector('.titulo');

titulo.textContent = "Aparecida Nutricionista 🥗"

// Selecionar somente um paciente: var paciente = document.querySelector('#primeiro-paciente');

var pacientes = document.querySelectorAll(".paciente") // Cria um array com todos os elementos com classe "paciente"

for(var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc');

    var pesoEhValido = validaPeso(peso);   // vai ser true ou false
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido) {                             // Só entra no if se o peso for inválido, por isso operador !
        console.log("Peso inválido!");
        tdPeso.textContent = "Peso inválido";
        pesoEhValido = false;        
        paciente.classList.add("paciente-invalido"); // Dessa forma, é adicionada uma classe ao elemento, que está listada no CSS, que por sua vez altera o estilo
        // paciente.style.backgroundColor = 'lightcoral'; > Alterar o estilo dentro do JavaScript NÃO É RECOMENDADO.
    }

    if(!alturaEhValida) {
        console.log("Altura inválida!");
        tdAltura.textContent = "Altura inválida!"
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida) {
        
        tdImc.textContent = calculaImc(peso, altura)
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if(peso >= 0 && peso < 1000) {              // Retorna true se o peso for válido
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.00) {     
        return true;                            // Retorna true se a altura for válida
    } else {
        return false;                           // Retorna false se a altura for inválida
    }
}

function mostraMensagem() {
    console.log("Olá, eu fui clicado")
}
// Escutador de evento: percebe interação por clique num elemento
titulo.addEventListener("click", mostraMensagem); // Sem parenteses pois os parenteses associam ao retorno da função e não sua execução

