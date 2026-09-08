// ==========================================
// FUNÇÕES DO MODAL (PÁGINA INICIAL)
// ==========================================
function comprarCarro(modelo, preco) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');

    if (modal && modalTitle && modalMessage) {
        modalTitle.innerText = `Interesse no ${modelo}`;
        modalMessage.innerHTML = `Você selecionou o modelo <strong>${modelo}</strong> pelo valor de <strong>${preco}</strong>.<br><br>Um consultor CYD entrará em contato em breve!`;
        modal.style.display = 'flex';
    }
}

function fecharModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// ==========================================
// FUNÇÕES DO CHAT (PÁGINAS DOS CARROS)
// ==========================================
function abrirChat() {
    const chatBox = document.getElementById("chat-box");
    if (chatBox) {
        chatBox.style.display = "flex";
    }
}

function fecharChat() {
    const chatBox = document.getElementById("chat-box");
    if (chatBox) {
        chatBox.style.display = "none";
    }
}

function enviarMensagem() {
    const input = document.getElementById("chat-input");
    const chatBody = document.getElementById("chat-body");

    if (!input || !chatBody) return;

    const mensagem = input.value.trim();

    if (mensagem !== "") {
        // Mensagem enviada pelo usuário
        const msgUsuario = document.createElement("div");
        msgUsuario.classList.add("chat-message", "user");
        msgUsuario.textContent = mensagem;
        chatBody.appendChild(msgUsuario);

        input.value = "";
        chatBody.scrollTop = chatBody.scrollHeight;

        // Resposta automática do vendedor após 1 segundo
        setTimeout(() => {
            const msgVendedor = document.createElement("div");
            msgVendedor.classList.add("chat-message", "seller");
            msgVendedor.textContent = "Obrigado pelo contato! Um de nossos consultores vai agendar o seu Test Drive em instantes.";
            chatBody.appendChild(msgVendedor);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    }
}

function verificarEnter(event) {
    if (event.key === "Enter") {
        enviarMensagem();
    }
}
