function clicar() 
{
    var radios = window.document.getElementsByName("radod")
    var resposta = ""

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            resposta = radios[i].value; // Pega o valor do rádio marcado
            break;
        }
    }

    // Exibe mensagens de acordo com a resposta
         if (resposta === "Passar o tempo com a mulher") {
            alert('Você acertou! Próxima pergunta.')
            window.location.href = 'quiz4.html'
      } else if (resposta === "Ir pescar") { 
            alert('Você errou! Volte para o inicio e tente novamente.')
            window.location.href = 'index.html'
      } else if (resposta === "Viajar") {
            alert('Você errou! Volte para o inicio e tente novamente.')
            window.location.href = 'index.html'
      } else if (resposta === "Todas as alternativas") {
        alert('Você errou! Volte para o inicio e tente novamente.')
        window.location.href = 'index.html'
    } else {
        alert('Escolha pelo menos 1!')
    }
}