var div = document.createElement('div');
div.innerHTML = `
    <footer class="footer">
    <time id="preTimer">Próxima viagem comunal:
    <div id="timer"></div>
    </time>
        <button onclick="topFunction()" id="myBtn" title="Ir ao topo">
            Voltar ao topo  
        </button>
    </footer> 
`;
document.getElementById('footer').appendChild(div);
