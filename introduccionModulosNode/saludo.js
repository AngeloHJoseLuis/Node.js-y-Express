// Node.js y Express.

function saludar(nombre) {
    return `¡Hola, ${nombre}!`;
}

function saludarHolaMundo() {
    return '¡Hola, Mundo!';
}

// Verificar el valor del objeto module.exports.
console.log(module.exports);

module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
};

// Sintaxis alternativa
module.exports.saludar = saludar;
module.exports.saludarHolaMundo = saludarHolaMundo;

console.log(module.exports);