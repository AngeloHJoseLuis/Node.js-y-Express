// Node.js y Express.

// Ejemplo con un solo argumento.

function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

setTimeout(mostrarTema, 1000, 'Node.js');

// Ejemplo con varios argumentos.

function sumar(a, b) {
    console.log(a + b);
}

setTimeout(sumar, 2000, 5, 6);