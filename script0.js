function clicar()
{
    document.getElementById("butao")
    var conteudo = document.getElementById("conteudo");

    // Adiciona a classe de fade-out ao conteúdo
    conteudo.style.opacity = 0;

    // Aguarda o tempo da transição (1s) e redireciona
    setTimeout(function() {
        window.location.href = "quiz1.html"; // Substitua pelo link desejado
    }, 1000); // Tempo de 1 segundo para esperar a animação
}
   


