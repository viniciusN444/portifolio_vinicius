document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    const texto = `Olá Vinícius, meu nome é ${nome}%0AEmail: ${email}%0ATelefone: ${telefone}%0AAssunto: ${assunto}%0AMensagem: ${mensagem}`;
    const numeroWhatsApp = '5516997444062';
    const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

    window.open(url, '_blank');
});

 document.querySelectorAll('.leia-mais').forEach(botao => {
    botao.addEventListener('click', function (e) {
      e.preventDefault();
      const paragrafo = this.previousElementSibling;

      // Alterna a classe que mostra o texto
      paragrafo.classList.toggle('texto-ativo');

      // Muda o texto do botão
      if (paragrafo.classList.contains('texto-ativo')) {
        this.textContent = 'Leia Menos';
      } else {
        this.textContent = 'Leia Mais';
      }
    });
  });