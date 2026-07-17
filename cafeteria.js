// Mensagem ao abrir a página
window.onload = function () {
    alert("☕ Seja bem-vindo ao Café Aroma!");
};

// Mostra o horário
function mostrarHorario() {
    alert("Estamos abertos de Segunda a Sábado, das 8h às 20h.");
}

// Simula um pedido
function fazerPedido() {
    let nome = prompt("Qual é o seu nome?");

    if (nome === "" || nome === null) {
        alert("Pedido cancelado.");
    } else {
        alert("Obrigado pelo pedido, " + nome + "! ☕");
    }
}
