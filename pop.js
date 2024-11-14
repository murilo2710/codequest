// Dados simulados
let remainingLives = 3; // Quantidade de vidas restantes
let consecutiveCorrect = 7; // Questões seguidas corretas

// Função para abrir o popup
function showPopup(type) {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.style.display = "flex";

    // Conteúdo do popup
    const content = document.createElement("div");
    content.className = "popup-content";

    // Adicionar conteúdo com base no tipo
    if (type === "hearts") {
        content.innerHTML = `
            <h2>Vidas</h2>
            <p>Você tem ${remainingLives} vidas restantes.</p>
            <button onclick="closePopup(this)">Fechar</button>
        `;
    } else if (type === "fire") {
        content.innerHTML = `
            <h2>Questões Certas Seguidas</h2>
            <p>Você acertou ${consecutiveCorrect} questões consecutivas!</p>
            <button onclick="closePopup(this)">Fechar</button>
        `;
    }

    popup.appendChild(content);
    document.body.appendChild(popup);
}

// Função para fechar o popup
function closePopup(button) {
    const popup = button.parentElement.parentElement;
    document.body.removeChild(popup);
}
