// Para associar o botão do HTML para o JS, deve ser primeiramente selecionado com querySelector

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", adicionarPaciente);

function adicionarPaciente(event) {

    event.preventDefault();

    var form = document.querySelector('#form-adiciona') // Puxa o formulário do html

// Extrair informações do objeto paciente que é extraído do form
    var paciente = obtemPacienteDoFormulario(form);    



    var erros = validaPaciente(paciente);

    if(erros.length > 0) {                      // Verifica se existem mensagens de erro        
        exibeMensagensDeErro(erros);            // Como existe mais de uma mensagem de erro, criamos uma função responsável por criar uma lista
        return;                                 // Sai da função adicionar paciente caso tenha erro
    }
// Validar o paciente inserido
    if(!validaPaciente(paciente)) {                                 // Se o paciente NÃO for válido
        console.log("Paciente inválido!");                          // exibe mensagem e
        return;                                                     // sai da função
    }

    adicionaPacienteNaTabela(paciente);
    form.reset();   // Limpa os dados do formulário 
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);     // Cria a tr e a td do paciente
    var tabela = document.querySelector("#tabela-pacientes");   // Adicionando o paciente na tabela: Para inserir na tabela do html, precisa associar com a sua id
    tabela.appendChild(pacienteTr);                             // e add todo o conteúdo atribuído à pacienteTr dentro da tabela (tbody>tr>td)  
}

function exibeMensagensDeErro(erros) {                          // Para cada item do array de erros, vai pegar esse item e criar uma li
    var ul = document.querySelector("#mensagens-erro");         // no HTML e inserir o conteúdo lá dentro
    ul.innerHTML = "";                                          // Antes de inserir mensagens, apaga qualquer mensagem que já tenha sido inserida 

    erros.forEach(function(erro) {                              // nomeArray.forEach(ação) -> cria um loop com os elementos de uma lista
        var li = document.createElement("li");                  // erro é um nome arbitrário que se refere ao item atual de iteração
        li.textContent = erro;                                  // que nesse caso é a própria mensagem de erro sendo inserida
        ul.appendChild(li);                                     // Por fim o conteúdo é inserido dentro da tag mãe    
    })
}

// Cria um objeto paciente, onde são definidas suas propriedades com o par key: value
function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");     // Cria um elemento "tr" no html
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.peso, "info-imc");

// Insere o conteúdo que será acessado no objeto paciente 
    pesoTd.textContent = paciente.peso;                      // dentro da tag td (criada antes com createElement)
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(nomeTd);                 // Adiciona o conteúdo associado às Tr dentro da sua tag mãe (td)
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd)

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td")   // Primeiro cria o elemento td
    td.textContent = dado;                  // como dado e classe variam para cada Td criado, 
    td.classList.add(classe);               // eles são fornecidos na chamada da função para alterar cada um individualmente

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if(paciente.nome.length == 0) {
        erros.push("O nome não pode ficar em branco!");
    }
    if(!validaPeso(paciente.peso)) {
        erros.push("O peso é inválido!");
    }
    if(!validaAltura(paciente.altura)) {
        erros.push("A altura é inválida!")
    }
    if(paciente.gordura.length == 0) {
        erros.push("A gordura não pode ficar em branco!");
    }
    if(paciente.peso.length == 0) {
        erros.push("O peso não pode ficar em branco!")
    }
    if(paciente.altura.length == 0) {
        erros.push("A altura não pode ficar em branco!")
    }

    return erros;
}

// Como cada td tem uma classe, para não repetir o código abaixo dentro do montaTr para cada dado inserido, cria uma função que realiza essa tarefa
/*  var nomeTd = document.createElement("td");         
    nomeTd.classList.add("info-nome");
    nomeTd.textContent = paciente.nome;  */
