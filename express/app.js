// Node.js y Express. 1. Proyecto con Express.

const express = require('express');
const app = express();

// Simular una base de datos.
const { infoCursos } = require('./datos/cursos.js');

// console.log(infoCursos);

// 5. Routers in Express.
// const routerProgramacion = express.Router();
const routerProgramacion = require('./routers/programacion.js'); // 6. Routers en Archivos Distintos. Programacion.
app.use('/api/cursos/programacion', routerProgramacion);

// const routerMatematicas = express.Router();
const routerMatematicas = require('./routers/matematicas.js'); // 6. Routers en Archivos Distintos. Matematicas.
app.use('/api/cursos/matematicas', routerMatematicas);

// 2. Iniciar Srvidor y Primera Ruta.
// Ruta principal. Routing.
app.get('/', (req, res) => {
    res.send('Mi primer servidor con Express. Cursos 💻.');
});

// 3. Agregar Mas Rutas.
// Ruta de todos los recursos.
app.get('/api/cursos', (req, res) => {
    // res.send(infoCursos); // Enviar la información de los cursos.
    res.send(JSON.stringify(infoCursos)); // Enviar la información de los cursos.
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});