//Seu JavaScript de validação aqui
document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", function(event) {
        if (!validarFormulario()) {
            event.preventDefault(); // Impede o envio do formulário se não for válido
        } else {
            exibirMensagemSucesso(); // Exibe a mensagem de sucesso se o formulário for válido
        }
    });
});

function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;

    if (nome.trim() === "" || email.trim() === "" || assunto.trim() === "" || mensagem.trim() === "") {
        alert("Por favor, preencha todos os campos do formulário.");
        return false;
    }

    // Validar o formato do email (opcional)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um endereço de email válido.");
        return false;
    }

    // Se chegou aqui, o formulário está válido
    return true;
}

function exibirMensagemSucesso() {
    alert("O formulário foi enviado com sucesso! Obrigado por entrar em contato.");
    // Ou você pode adicionar um elemento HTML para exibir a mensagem na página:
    // var mensagemElement = document.createElement("p");
    // mensagemElement.textContent = "O formulário foi enviado com sucesso! Obrigado por entrar em contato.";
    // formulario.appendChild(mensagemElement);
}
