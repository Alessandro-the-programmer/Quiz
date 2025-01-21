function clicar() 
{
    var radios = window.document.getElementsByName("radhob")
    var resposta = ""

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            resposta = radios[i].value; // Pega o valor do rádio marcado
            break;
        }
    }

    // Exibe mensagens de acordo com a resposta
         if (resposta === "Jogar no celular") {
            alert('Você acertou! Próxima pergunta.')
            window.location.href = 'quiz5.html'
      } else if (resposta === "Ver filmes/séries") { 
            alert('Você errou! Volte para o inicio e tente novamente.')
            window.location.href = 'index.html'
      } else if (resposta === "Descansar") {
            alert('Você errou! Volte para o inicio e tente novamente.')
            window.location.href = 'index.html'
      } else if (resposta === "Comer") {
        alert('Você errou! Volte para o inicio e tente novamente.')
        window.location.href = 'index.html'
    } else {
        alert('Escolha pelo menos 1!')
    }
}