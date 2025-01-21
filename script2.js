function clicar() 
{
    var radios = window.document.getElementsByName("radcom")
    var resposta = ""

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            resposta = radios[i].value; // Pega o valor do rádio marcado
            break;
        }
    }

    // Exibe mensagens de acordo com a resposta
         if (resposta === "Churrasco") {
            alert('Você acertou! Próxima pergunta.')
            window.location.href = 'quiz3.html'
      } else if (resposta === "Macarrão") { 
            alert('Você errou! Volte para o inicio e tente novamente.')
            window.location.href = 'index.html'
      } else if (resposta === "Pizza") {
            alert('Você errou! Volte para o inicio e tente novamente.')
            window.location.href = 'index.html'
      } else if (resposta === "Lasanha") {
        alert('Você errou! Volte para o inicio e tente novamente.')
        window.location.href = 'index.html'
    } else if (resposta === ""){
        alert('Escolha pelo menos 1!')
    }
}