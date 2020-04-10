module.exports = function(app) {

    const quizzes = [
        {_id: '123', title: 'Quiz 1'},
        {_id: '234', title: 'Quiz 2'},
        {_id: '345', title: 'Quiz 3'}

    ]

    app.get('/hello', (req, res) =>
        res.send('Hello World'))

    app.get('/api/quizzes', (req, res) =>
        res.send(quizzes))

    app.get('/api/quizzes/:qzid', (req, res) =>
        res.json(quizzes
            .find(quiz =>
                quiz._id === req.params['qzid'])))

}
