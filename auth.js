// --- LÓGICA DE CADASTRO (CRIAR CONTA) ---

// Verifica se estamos na página de cadastro
const botaoCadastrar = document.getElementById('botao-cadastrar');

if (botaoCadastrar) {
    botaoCadastrar.addEventListener('click', () => {
        // 1. Pegar o que o usuário digitou
        const email = document.getElementById('email-cadastro').value;
        const senha = document.getElementById('senha-cadastro').value;
        const confirmar = document.getElementById('senha-confirmar').value;

        // 2. Validações (Regras de segurança básica)
        if (!email || !senha) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        if (senha !== confirmar) {
            alert("As senhas não conferem!");
            return;
        }

        // 3. Salvar no "Banco de Dados" do Navegador (Local Storage)
        // Estamos salvando com a chave 'usuario_nexus'
        localStorage.setItem('email_usuario', email);
        localStorage.setItem('senha_usuario', senha);

        alert("Conta criada com sucesso! Agora faça login.");
        
        // 4. Levar o usuário para a tela de login
        window.location.href = "login.html";
    });
}

// --- LÓGICA DE LOGIN (ENTRAR) ---

// Verifica se estamos na página de login
const botaoEntrar = document.getElementById('botao-entrar');

if (botaoEntrar) {
    botaoEntrar.addEventListener('click', () => {
        // 1. Pegar o que foi digitado no login
        const emailDigitado = document.getElementById('email-login').value;
        const senhaDigitada = document.getElementById('senha-login').value;

        // 2. Buscar o que está salvo no "Banco de Dados"
        const emailSalvo = localStorage.getItem('email_usuario');
        const senhaSalva = localStorage.getItem('senha_usuario');

        // 3. Conferir se bate
        if (emailDigitado === emailSalvo && senhaDigitada === senhaSalva) {
            alert("Login realizado! Bem-vindo de volta.");
            window.location.href = "index.html"; // Manda pra loja
        } else {
            alert("E-mail ou senha incorretos! Tente novamente.");
        }
    });
}