// Node.js Y Express.
// 6. Routers en Archivos Distintos. Matematicas.

const express = require('express');

const { matematicas } = require('../datos/cursos.js').infoCursos;

const routerMatematicas = express.Router();

routerMatematicas.use(express.json()); // Procesar el cuerpo de la solicitud.

// 3. Agregar Mas Rutas. Ruta específica para y matemáticas.
// 5. Routers in Express.
// app.get('/api/cursos/matematicas', (req, res) => {
routerMatematicas.get('/', (req, res) => {
    res.json(matematicas); // 7. Proyecto API Final.
    // res.send(JSON.stringify(matematicas));
    // res.send(JSON.stringify(infoCursos.matematicas));
    // res.setHeader('Content-Type', 'application/json');
    // res.send(JSON.stringify(infoCursos.matematicas, null, 2)); // El segundo y tercer parámetro formatean el JSON.
});

// 4. Parametros de Rutas. Matematicas.
// app.get('/api/cursos/matematicas/:tema', (req, res) => {
// 5. Routers in Express.
routerMatematicas.get('/:tema', (req, res) => {
    const tema = req.params.tema;
    const resultados = matematicas.filter(curso => curso.tema === tema);
    // const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema);

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }

    res.json(resultados); // 7. Proyecto API Final.
    // res.send(JSON.stringify(resultados));
});

// 7. Proyecto API Final.
routerMatematicas.post('/', (req, res) => {
    let cursoNuevo = req.body;
    matematicas.push(cursoNuevo);
    res.json(matematicas);
});

module.exports = routerMatematicas;