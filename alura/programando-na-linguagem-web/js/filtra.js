var campoFiltro = document.querySelector("#filtrar-tabela")

console.log(campoFiltro);

campoFiltro.addEventListener("input", filtrar)

function filtrar() {
    console.log(this.value);  // campoFiltro.value
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");     // Expressão regular busca o valor do campoFiltro, i = case insensitive 

            if (!expressao.test(nome)) {                     // Condicional adiciona classe invisível quando NÃO encontrar a expressão regular
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
}