const express = require('express')
const app = express()

require('./controllers/quiz.controller.server')(app)
require('./controllers/question.controller.server')(app)
/*
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


*/
app.listen(3000)

