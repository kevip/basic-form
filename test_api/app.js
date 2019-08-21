const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const jsonHandler = require('./jsonHandler');

let app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/solicitud', (request, response) => {
    const query = request.query;

    jsonHandler.readFile('./solicitudes.json', query)
        .then(data => {
            response.status(200);
            response.type('application/json');
            response.send(data);
        })
        .catch(err => {
            response.status(500);
            response.type('application/json');
            response.send(JSON.stringify(err));
        });
});

app.post('/solicitud', (request, response) => {
    const solicitud = request.body;
    jsonHandler.readFile('./solicitudes.json')
        .then(data => {
            return jsonHandler.writeFile('./solicitudes.json', solicitud);
        })
        .then(data => {
            response.status(201);
            response.type('application/json');
            response.send({ data });
        })
        .catch(error => {
            response.status(500);
            response.type('application/json');
            response.send({ error});
        });
});


app.listen('8888');