// Node.js y Express.

// 1. Exportar e Importar Modulos
// const { saludar, saludarHolaMundo } = require('./saludo');

// Llamar a las funciones importadas desde el modulo saludo.js.
// Ahora podemos llamarlas directamente porque usamos la
// sintaxis de desestructuración al importarlas.
// console.log(saludar('freeCodeCamp'));
// console.log(saludarHolaMundo()); 

// 2. Sintqxis de Desestructuracion
// console.log('¡Hola Mundo!');

// console.warn('Ocurrio un error...');

// console.error('¡Ocurrio un error!');

// // Pasando un objeto Error.
// console.warn(new Error('¡Ocurrio un error!'));
// console.error(new Error('¡Ocurrio un error!'));

// 3. El Modulo process

// console.log(process);
// console.log(process.env);

// // El indice inicia en 0 como en los arrays.
// console.log(process.argv[2]);
// console.log(process.argv[3]);

// // Ciclo for para iterar sobre todos los argumentos dados en la línea de comandos.

// for (let i = 2; i < process.argv.length; i++) {
//     console.log(process.argv[i]);
// }

// // Informacion sobre el uso de memori.

// console.log(process.memoryUsage());

// 4. El Modulo OS
// const os = require('os');

// console.log(os.type());
// console.log(os.homedir());
// console.log(os.uptime());
// console.log(os.userInfo());
// console.log(os.networkInterfaces());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.totalmem());

// 5. El Modulo fs

const fs = require('fs');

// -------------------------
// Versiones asincronas.
// -------------------------

console.log('Antes de leer el archivo...');

// Leer un archivo.

fs.readFile('index.html', 'utf-8', (err, contenido) => {
    if (err) {
        throw err;
    }
    console.log(contenido);
});

console.log('Despues de leer el archivo...');

// Cambiar el nombre de un archivo.

fs.rename('index.html', 'main.html', (err) => {
    if (err) {
        throw err;
    }
    console.log('Nombre cambiado exitosamente.');
});

console.log('Depues de cambiar el nombre del archivo...');

// Agregar contenido al final de un archivo. 
// Crear un archivo nuevo si no existe.

fs.appendFile('index.html', '<p>Hola</p>', (err) => {
    if (err) {
        throw err;
    }
    console.log('Archivo actualizado');
});

console.log('Depues de agregar contenido al archivo...');

// Reemplazar contenido del archivo. 
// Crear un archivo nuevo si no existe.

fs.writeFile('index.html', 'Contenido nuevo', (err) => {
    if (err) {
        throw err;
    }
    console.log('Contenido reemplazado exitosamente.');
});

console.log('Depues de reemplazar el contenido del archivo...');

// Eliminar archivos.

fs.unlink('main.html', (err) => {
    if (err) {
        throw err;
    }
    console.log('Archivo eliminado');
});

console.log('Depues de eliminar un archivo...');

// -------------------------
// Versiones sincronas.
// -------------------------

const archivo = fs.readFileSync('index.html', 'utf-8');

console.log(archivo);

fs.renameSync('index.html', 'main.html');

fs.appendFileSync('index.html', '<p>Hola</p>');

fs.writeFileSync('index.html', 'Contenido nuevo');