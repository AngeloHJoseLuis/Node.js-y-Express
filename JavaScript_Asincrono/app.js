// Node.js y Express. Estefania Cassingena Navone.

// 1. EventEmitter.
// var EventEmitter = require('events');

// console.log(EventEmitter);  // $ npm app.js

// console.log(typeof EventEmitter);

// 2. El Modulo Events.
// const EventEmitter = require('events');

// const emisorProductos = new EventEmitter();

// Ejemplo 1 - Sin parametros.

// emisorProductos.on('compra', () => {
//     console.log('Se realizo una compra.');
// });

// emisorProductos.emit('compra');

// Ejemplo 2 - Un parametro.

// emisorProductos.on('compra', (total) => {
//     console.log(`Se realizo una compra por $${total}.`); 
// });

// emisorProductos.emit('compra', 500);

// Ejemplo 3 - Dos parametros.

// emisorProductos.on('compra', (total, numProductos) => {
//     console.log(`Total de la compra: $${total}`);
//     console.log(`Numero de productos: ${numProductos}`);  
// });

// emisorProductos.emit('compra', 500, 5);

// 3. Ejemplo Codigo Asincrono.

// const promesaCumplida = true;

// Crear una promesa.
// setTimeout() simula un proceso asincrono.
// const miPromesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (promesaCumplida) {
//             resolve('¡Promesa cumplida!');
//         } else {
//             reject('Promesa rechazada... ');
//         }
//     }, 3000);
// });

// Manejar cuando la promesa fue cumplida exitosamente.
// No maneja lo que pasaria si es rechazada.
// miPromesa.then((valor) => {
//     console.log(valor);
// });

// Definir dos funciones que manejen
// cuando es aceptada y rechazada.
// const manejarPromesaCumplida = (valor) => {
//     console.log(valor);
// };

// const manejarPromesaRechazada = (razonRechazo) => {
//     console.log(razonRechazo);
// };

// miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);

// ------------------------
// Ejemplo: Pedido de Pizza
// ------------------------

// Tenemos una tienda de pizzas y 
// nuestro sistema de pedidos es asincrono. 
// Puede tomar unos segundos procesar el pedido
// y la operacion tambien puede fallar algunas veces.
// const estatusPedido = () => {
    // Math.random() genera un numero aleatorio entre 0 y 1.
    // const estatus = Math.random() < 0.8;
    // Para ver el estatus en el terminal. 
    // Incluido solamente para probar la aplicacion.
//     console.log(estatus);
//     return estatus;
// };

// const miPedidoDePizza = new Promise((resolve, reject) => {
    // setTimeout() simula el tiempo que tardaria la operacion
    // de procesar la compra y agregarla a una base de datos.
//     setTimeout(() => {
//         if (estatusPedido()) {
//             resolve('¡Pedido exitoso! Su pizza esta en camino.');
//         } else {
//             reject('Ocurrio un error. Por favor intente nuevamente.');
//         }
//     }, 3000);
// });

// const manejarPedido = (mensajeDeConfirmacion) => {
//     console.log(mensajeDeConfirmacion);
// };

// const rechazarPedido = (mensajeDeError) => {
//     console.log(mensajeDeError);
// };

// miPedidoDePizza.then(manejarPedido, rechazarPedido);

// // Sintaxis alternativa: encadenar .then()
// miPedidoDePizza
//     .then((mensajeDeConfirmacion) => {
//         console.log(mensajeDeConfirmacion);
//     })
//     .then(null, (mensajeDeError) => {
//         console.log(mensajeDeError);
//     });

// 4. El Metodo .catch()

// ------------------------
// Ejemplo: Pedido de Pizza
// ------------------------

// Tenemos una tienda de pizzas y 
// nuestro sistema de pedidos es asincrono. 
// Puede tomar unos segundos procesar el pedido
// y la operacion tambien puede fallar.
const estatusPedido = () => {
    // Math.random() genera un número aleatorio entre 0 y 1.
    const estatus = Math.random() < 0.8;
    // Para ver el estatus en el terminal. 
    console.log(estatus);
    return estatus;
};

const miPedidoDePizza = new Promise((resolve, reject) => {
    // setTimeout() simula el tiempo que tardaria la operación
    // de procesar la compra.
    setTimeout(() => {
        if (estatusPedido()) {
            resolve('¡Pedido exitoso! Su pizza esta en camino.');
        } else {
            reject('Ocurrio un error. Por favor intente nuevamente.');
        }
    }, 3000);
});

const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
};

const rechazarPedido = (mensajeDeError) => {
    console.log(mensajeDeError);
};

miPedidoDePizza.then(manejarPedido).catch(rechazarPedido);

    // Otra alternativa
    miPedidoDePizza
        .then(manejarPedido)
        .catch(rechazarPedido);

// Sintaxis alternativa. Encadenar .then()
miPedidoDePizza
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    })
    .then(null, (mensajeDeError) => {
        console.log(mensajeDeError);
    });

// Sintaxis alternativa. Reemplazar .then() con .catch()
// Se elimina null como el primer argumento porque .catch() solo maneja
// el resultado si la promesa es rechazada. 
miPedidoDePizza
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    });