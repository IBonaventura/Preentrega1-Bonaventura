<!DOCTYPE html>
<html>
<head>
    <title>Juego Piedra, Papel, Tijeras</title>
</head>
<body>
    <h1>Juego Piedra, Papel, Tijeras</h1>
    <div>
        <button id="piedra" style="margin: 5px;">Piedra</button>
        <button id="papel" style="margin: 5px;">Papel</button>
        <button id="tijeras" style="margin: 5px;">Tijeras</button>
    </div>
    
    <h2>Resultado:</h2>
    <p id="resultado"></p>
    
    <script>
        const opciones = ['piedra', 'papel', 'tijeras'];
        const botones = document.querySelectorAll('button');
        const resultadoElement = document.getElementById('resultado');

        botones.forEach((boton) => {
            boton.addEventListener('click', () => {
                const eleccionUsuario = boton.id;
                const eleccionMaquina = opciones[Math.floor(Math.random() * 3)];
                const resultado = determinarResultado(eleccionUsuario, eleccionMaquina);
                mostrarResultado(resultado);
            });
        });

        function determinarResultado(eleccionUsuario, eleccionMaquina) {
            if (eleccionUsuario === eleccionMaquina) {
                return "¡Es un empate!";
            } else if (
                (eleccionUsuario === 'piedra' && eleccionMaquina === 'tijeras') ||
                (eleccionUsuario === 'papel' && eleccionMaquina === 'piedra') ||
                (eleccionUsuario === 'tijeras' && eleccionMaquina === 'papel')
            ) {
                return "¡Ganaste!";
            } else {
                return `¡Perdiste! La máquina eligió ${eleccionMaquina}`;
            }
        }

        function mostrarResultado(resultado) {
            resultadoElement.textContent = resultado;
        }
    </script>
</body>
</html>
