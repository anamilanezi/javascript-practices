/* Como fazer a requisição com JavaScript de modo que ela vá até a URL, busque e retorne os dados
No código JavaScript, devemos acessar o endereço api-pacientes.herokuapp.com/pacientes, buscar e trazer os seus dados e colocá-los na tabela. Esse endereço é uma API, uma interface de programação que disponibiliza os dados para o usuário.

O XMLHttpRequest é um objeto do JS responsável por fazer requisições HTTP. O trecho XML do nome indica que ele era utilizado anteriormente para realizar o transporte de dados do tipo XML, no entanto, atualmente ele consegue trafegar outros tipos de dados, como textos.

*/
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    console.log("Buscando pacientes...");

// Faz a requisição
    var xhr = new XMLHttpRequest();

// Especificar o tipo de requisição a ser feita, no caso, GET
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

/* Para os dados serem exibidos, após o envio da requisição, devemos escutar um evento específico que é acionado quando a requisição termina e a sua resposta é carregada. Ao escutarmos o evento, carregaremos a resposta da requisição - que no caso, serão nossos dados. Esse evento é o load, característico do XMLHttpRequest.

E para acessarmos os dados da resposta, usaremos a propriedade responseText do XMLHttpRequest. Para testarmos, podemos guardá-la em uma variável, e depois imprimi-la no console do navegador: */ 

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax")
        if(xhr.status == 200) {

            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;        // Resposta é importada como uma string
            var pacientes = JSON.parse(resposta);   // Transforma string em objeto

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });

        } else {
            erroAjax.classList.remove('invisivel');
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });
    
    xhr.send();

})