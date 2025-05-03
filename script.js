let bobinas = JSON.parse(localStorage.getItem("bobinas")) || [];

function atualizarLista() {
    const lista = document.getElementById("lista-bobinas");
    const total = document.getElementById("total-bobinas");
    lista.innerHTML = ""; // Limpa a lista

    // Para cada bobina, cria-se um item na lista
    bobinas.forEach((bobina, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>ID: ${bobina.id}</strong> - Linha ${bobina.Linha}, Ø ${bobina.Diametro}, Parede: ${bobina.Parede}, Peso: ${bobina.Peso}, Comprimento: ${bobina.Comprimento}
            <button onclick="removerBobina(${index})">Excluir</button>
        `;
        lista.appendChild(li);
    });

    // Exibe o total de bobinas
    total.textContent = `Total de Bobinas: ${bobinas.length}`;
}

// Função para remover a bobina
function removerBobina(index) {
    bobinas.splice(index, 1); // Remove a bobina do array
    localStorage.setItem("bobinas", JSON.stringify(bobinas)); // Atualiza o localStorage
    atualizarLista(); // Atualiza a lista na página
}

// Função para adicionar uma nova bobina
document.getElementById("form-bobina").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o envio do formulário padrão

    const novaBobina = {
        data: document.getElementById("data").value,
        id: document.getElementById("id-rastro").value,
        Turno: document.getElementById("id-turno").value,
        Registro: document.getElementById("id-registro-op").value,
        Linha: document.getElementById("id-Linha").value,
        Diametro: document.getElementById("id-Diametro").value,
        Parede: document.getElementById("id-parede").value,
        Peso: document.getElementById("id-Peso").value,
        Comprimento: document.getElementById("id-Comprimento").value,
    };

    bobinas.push(novaBobina); // Adiciona a nova bobina ao array
    localStorage.setItem("bobinas", JSON.stringify(bobinas)); // Atualiza o localStorage
    this.reset(); // Limpa os campos do formulário
    atualizarLista(); // Atualiza a lista de bobinas
});

// Inicializa a lista ao carregar a página
atualizarLista();
