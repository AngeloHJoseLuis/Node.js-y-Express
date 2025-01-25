// Node.js Y Express.
// 6. Routers en Archivos Distintos. Programacion.

const express = require('express');

const { programacion } = require('../datos/cursos.js').infoCursos;

const routerProgramacion = express.Router();

// Procesar el cuerpo de la solicitud. Middleware.
routerProgramacion.use(express.json()); // 7. Proyecto API Final.

// Rutas específicas para programación y matemáticas.
// 5. Routers in Express.
// app.get('/api/cursos/programacion', (req, res) => {
routerProgramacion.get('/', (req, res) => {
    res.json(programacion); // 7. Proyecto API Final.
    // res.send(JSON.stringify(programacion));
    // res.send(JSON.stringify(infoCursos.programacion));
    // res.setHeader('Content-Type', 'application/json');
    // res.send(JSON.stringify(infoCursos.programacion, null, 2)); // El segundo y tercer parámetro formatean el JSON.
});

// 4. Parametros de Rutas. Programacion.
// 5. Routers in Express.
// app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);
    // const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }

    // 5. Parametros query. Ver los parametros query.
    // console.log(req.query.ordenar);   // javascript/basico?ordenar=vistas   python?ordenar=vistas

    // Ordenar por número de vistas.
    if (req.query.ordenar === 'vistas') {
        return res.send(resultados.sort((a, b) => b.vistas - a.vistas)); // orden descendente b -> a))) // 7. Proyecto API Final.
        // return res.send(JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas))); // orden ascendente a -> b
    } else {
        res.json(resultados); // 7. Proyecto API Final.
        // res.send(JSON.stringify(resultados));
    }
});

// 5. Routers in Express.
// app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
    // const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if (resultados.length === 0) {
        return res.status(204).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`); // 404 por 204
    }

    res.json(resultados); // 7. Proyecto API Final.
    // res.send(JSON.stringify(resultados));
});

// 7. Proyecto API Final.
routerProgramacion.post('/', (req, res) => {
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.json(programacion);
    // res.send(JSON.stringify(programacion));
});

routerProgramacion.put('/:id', (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        programacion[indice] = cursoActualizado;
    }
    res.json(programacion);
    // res.send(JSON.stringify(programacion));
});

routerProgramacion.patch('/:id', (req, res) => {
    const infoNueva = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        const cursoAModificar = programacion[indice];
        Object.assign(cursoAModificar, infoNueva);
    }
    res.json(programacion);
    // res.send(JSON.stringify(programacion));
});

routerProgramacion.delete('/:id', (req, res) => {
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        programacion.splice(indice, 1);
    }
    res.json(programacion);
    // res.send(JSON.stringify(programacion));
});

module.exports = routerProgramacion;