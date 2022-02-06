var d = new Date();
var n = d.getHours();
if (n <= 6) {
    document.body.classList.add("dawn");
    var imgIndex = document.getElementById("imagemViagem");
    imgIndex.innerHTML =`
    <picture>
        <source media="(max-width: 500px)" srcset="../imagens/welcomeToOrlando.jpg">
        <source media="(max-width: 800px)" srcset="../imagens/arrumandoMalas.jpg">
        <img src="../imagens/imagemDecolagemNoite.jpeg"  alt="imagem de Viagem"></img>
    </picture>`;
} else if (n <= 12) {
    document.body.classList.add("morning");
    var imgIndex = document.getElementById("imagemViagem");
    imgIndex.innerHTML =`
    <picture>
        <source media="(max-width: 500px)" srcset="../imagens/welcomeToOrlando.jpg">
        <source media="(max-width: 800px)" srcset="../imagens/arrumandoMalas.jpg">
        <img  src="../imagens/imagemDecolagem.jpg" alt="imagem de Viagem"></img>
    </picture>`;
} else if (n <= 18) {
    document.body.classList.add("afternoon");
    var imgIndex = document.getElementById("imagemViagem");
    imgIndex.innerHTML =`
    <picture>
        <source media="(max-width: 500px)" srcset="../imagens/welcomeToOrlando.jpg">
        <source media="(max-width: 800px)" srcset="../imagens/arrumandoMalas.jpg">
        <img  src="../imagens/imagemDecolagem.jpg" alt="imagem de Viagem"></img>
    </picture>`;
} else {
    document.body.classList.add("night");
    var imgIndex = document.getElementById("imagemViagem");
    imgIndex.innerHTML =`
    <picture>
        <source media="(max-width: 500px)" srcset="../imagens/welcomeToOrlando.jpg">
        <source media="(max-width: 800px)" srcset="../imagens/arrumandoMalas.jpg">
        <img src="../imagens/imagemDecolagemNoite.jpeg"  alt="imagem de Viagem"></img>
    </picture>
    `;
}