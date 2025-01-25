// Node.js y Express.

// Ejemplo con un ssolo argumento.
function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

setInterval(mostrarTema, 1100, 'Node.js');

// Ejemplo con varios argumentos.
function sumar(a, b) {
    console.log(a + b);
}

setInterval(sumar, 1200, 3, 4);