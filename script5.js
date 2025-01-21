function clicar() 
{
    var radios = window.document.getElementsByName("radclt")
    var resposta = ""

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            resposta = radios[i].value; // Pega o valor do rádio marcado
            break;
        }
    }

    // Exibe mensagens de acordo com a resposta
         if (resposta === "Mercadão") {
            window.location.href = 'parabens.html'
      } else if (resposta === "Mercado") { 
            alert('Você errou! Volte para o inicio e tente novamente.')
            window.location.href = 'index.html'
      } else if (resposta === "Instalador de Insulfilm") {
            alert('Você errou! Volte para o inicio e tente novamente.')
            window.location.href = 'index.html'
      } else if (resposta === "Loja de carro") {
        alert('Você errou! Volte para o inicio e tente novamente.')
        window.location.href = 'index.html'
    } else {
        alert('Escolha pelo menos 1!')
    }
}