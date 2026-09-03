function comprarCarro(modelo, preco) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');

    modalTitle.innerText = `Interesse no ${modelo}`;
    modalMessage.innerHTML = `Você selecionou o modelo <strong>${modelo}</strong> pelo valor de <strong>${preco}</strong>.<br><br>Um consultor CYD entrará em contato em breve!`;
    
    modal.style.display = 'flex';
}

function fecharModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
