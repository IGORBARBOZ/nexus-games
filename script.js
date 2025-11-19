// 1. Começamos com 0 itens
let quantidade = 0;

// 2. Pegamos o lugar onde o número vai aparecer
const mostrador = document.getElementById('contagem-carrinho');

// 3. Pegamos todos os botões de comprar
const botoes = document.querySelectorAll('.card-jogo button');

// 4. Ensinamos cada botão a somar
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        // Matemática simples: valor atual + 1
        quantidade = quantidade + 1;
        
        // Atualiza o número na tela
        mostrador.innerText = quantidade;

        // Feedback visual (muda o botão)
        botao.textContent = "Adicionado!";
        botao.style.background = "#555";
        
        // Volta o botão ao normal depois de 1 segundo
        setTimeout(() => {
            botao.textContent = "Comprar";
            botao.style.background = ""; // Volta a cor original do CSS
        }, 1000);
    });
});

// ... (Mantenha o código do carrinho aqui em cima) ...

/* --- SISTEMA DE LOGIN/LOGOUT NA HOME --- */

// 1. Busca se tem algum email salvo no navegador
const usuarioLogado = localStorage.getItem('email_usuario');
const botaoLogin = document.querySelector('.botao-login');

// 2. Se tiver usuário logado E o botão existir na tela...
if (usuarioLogado && botaoLogin) {
    // Truque: Pega o texto antes do @ (ex: "igor" de "igor@gmail.com")
    const nomeUsuario = usuarioLogado.split('@')[0];
    
    // Muda o texto do botão
    botaoLogin.textContent = `Olá, ${nomeUsuario}`;
    
    // Muda a cor para Roxo (para destacar que está logado)
    botaoLogin.style.backgroundColor = "#8a2be2";
    
    // Tira o link para a página de login (para não ir pra lá se clicar)
    botaoLogin.href = "#";

    // 3. Funcionalidade de Logout (Sair)
    botaoLogin.addEventListener('click', () => {
        // Pergunta se quer sair
        const querSair = confirm("Deseja desconectar da sua conta?");
        
        if (querSair) {
            // Apaga os dados do navegador
            localStorage.removeItem('email_usuario');
            localStorage.removeItem('senha_usuario');
            
            // Recarrega a página para voltar ao estado original
            window.location.reload();
        }
    });
}