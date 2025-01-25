// Node.js y Express.

const http = require('http');
const { infoCursos } = require('./cursos');

const server = http.createServer((req, res) => {
    const metodo = req.method;

    switch (metodo) {
        case 'GET':
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        case 'PUT':
            return manejarSolicitudPUT(req, res);
        case 'DELETE':
            return manejarSolicitudDELETE(req, res);
        default:
            res.statusCode = 501;
            res.end(`El método no puede ser manejado por el servidor: ${metodo}`);
    }
});

function manejarSolicitudGET(req, res) {
    const camino = req.url;

    if (camino === '/') {
        return res.end('Bienvenidos a mi primer servidor y API creados con Node.js.');
    } else if (camino === '/cursos') {
        return res.end(JSON.stringify(infoCursos));
    } else if (camino === '/cursos/programacion') {
        return res.end(JSON.stringify(infoCursos.programacion));
    }

    res.statusCode = 404;
    return res.end('El recurso solicitado no existe...');
}

function manejarSolicitudPOST(req, res) {
    const path = req.url;

    if (path === '/cursos/programacion') {

        let cuerpo = '';

        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });

        req.on('end', () => {
            cuerpo = JSON.parse(cuerpo);
            infoCursos.programacion.push(cuerpo);

            res.end('El servidor recibió una solicitud POST para /cursos/programacion');
        });
    }
}

function manejarSolicitudPUT(req, res) {
    const path = req.url;

    if (path === '/cursos/programacion') {

        let cuerpo = '';

        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });

        req.on('end', () => {
            cuerpo = JSON.parse(cuerpo);
            const cursoIndex = infoCursos.programacion.findIndex(curso => curso.id === cuerpo.id);

            if (cursoIndex !== -1) {
                infoCursos.programacion[cursoIndex] = cuerpo;
                res.end('El servidor recibió una solicitud PUT para /cursos/programacion');
            } else {
                res.statusCode = 404;
                res.end('El curso no se encontró');
            }
        });
    }
}

function manejarSolicitudDELETE(req, res) {
    const path = req.url;

    if (path === '/cursos/programacion') {

        let cuerpo = '';

        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });

        req.on('end', () => {
            cuerpo = JSON.parse(cuerpo);
            const cursoIndex = infoCursos.programacion.findIndex(curso => curso.id === cuerpo.id);

            if (cursoIndex !== -1) {
                infoCursos.programacion.splice(cursoIndex, 1);
                res.end('El servidor recibió una solicitud DELETE para /cursos/programacion');
            } else {
                res.statusCode = 404;
                res.end('El curso no se encontró');
            }
        });
    }
}

const PUERTO = 3000;

server.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto ${PUERTO}...`);
});