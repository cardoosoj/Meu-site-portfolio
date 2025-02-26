document.getElementById("contatoForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    let formData = new FormData(this);

    try {
        let response = await fetch(this.action, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        });

        let data = await response.json();

        if (response.ok) {
            document.getElementById("mensagemRetorno").innerText = "✅ E-mail enviado com sucesso!";
            this.reset(); // Limpa o formulário após envio
        } else {
            document.getElementById("mensagemRetorno").innerText = "❌ Erro ao enviar o e-mail. Tente novamente.";
        }
    } catch (error) {
        document.getElementById("mensagemRetorno").innerText = "⚠️ Erro ao conectar com o servidor.";
    }
});