var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");   // Adiciona uma nova classe no CSS que permite o efeito de transição'
    setTimeout(function() {                             // Segura a execução da função
        event.target.parentNode.remove();
    }, 500);  
})

/* Separando event.target.parentNode.remove() em partes:

    var alvoEvento = event.target;              // Reconhece o TD: quando clicamos em um campo da tabela, é um alvo único
    var paiDoAlvo = alvoEvento.parentNode;      // TR > Associa ao "pai" tr que contém o td

    paiDoAlvo.remove();                         // Remove a linha clicada
})

## Método que apaga somente os dados originais do index.html (não funciona para pacientes adicionados depois): ##

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        console.log("Duplo clique");
        this.remove();              // This está atrelado ao dono do evento 
    });
});

*/