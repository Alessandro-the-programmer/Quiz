function clicar() 
{
    var radios = window.document.getElementsByName("radano")
    var resposta = ""

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            resposta = radios[i].value; // Pega o valor do rádio marcado
            break;
        }
    }

    // Exibe mensagens de acordo com a resposta
         if (resposta === "1986") {
            alert('Você acertou! Próxima pergunta.')
            window.location.href = 'quiz2.html'
      } else if (resposta === "1985") { 
            alert('Você errou! Volte para o inicio e tente novamente.')
            window.location.href = 'index.html'
      } else if (resposta === "1987") {
            alert('Você errou! Volte para o inicio e tente novamente.')
            window.location.href = 'index.html'
      } else if (resposta === "1989") {
        alert('Você errou! Volte para o inicio e tente novamente.')
        window.location.href = 'index.html'
    } else {
        alert('Escolha pelo menos 1!')
    }
}