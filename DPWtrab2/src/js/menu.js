var div = document.createElement('div'); 
div.innerHTML = `
    <div class="cabecalho">
        <a class="logo" href="./index.html">
            <img class="hide" src="../imagens/logoOrlando.jpg" alt="logo de orlando" >
            <img src="../imagens/textoOrlando.png" alt="palavra Orlando" >
            <img src="../imagens/textoTour.png" alt="palavra Tour">
        </a>
        <nav class="menu">
            <ul>
                <li>
                    <a href="../html/historia.html">História</a>
                </li>
                <li>
                    <a href="../html/curiosidades.html">Curiosidades</a>
                </li>
                <li>
                    <a href="../html/quiz.html">Quiz</a>
                </li>
                <li>
                    <a href="../html/galeria.html">Galeria</a>
                </li>
            </ul>
        </nav> 
        <a id="contatos" href="../html/contatos.html">Entre em contato conosco!</a>
    </div> 
`;
document.getElementById('menu').appendChild(div);