const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

module.exports = function () {
    const app = express();

    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    // curl -X POST -H "Content-Type:application/json" -d '{"titulo":"novo","preco":150,"descricao":"descricao do livro"}' 'http://localhost:3000/produtos'

    app.use(expressValidator());

    app.set('view engine', 'ejs');

    load('routes')
        .then('infra')
        .into(app);

    return app;
};