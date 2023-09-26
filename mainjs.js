const opciones = ['piedra', 'papel', 'tijeras'];

function jugar() {
    const eleccionUsuario = prompt("Elige una opción: piedra, papel o tijeras").toLowerCase();
    
    if (!opciones.includes(eleccionUsuario)) {
        alert("Eleccion inválida. Por favor, elige piedra, papel o tijeras.");
        return;
    }

    const eleccionMaquina = opciones[Math.floor(Math.random() * 3)];
    const resultado = determinarResultado(eleccionUsuario, eleccionMaquina);
    alert(resultado);
}

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
