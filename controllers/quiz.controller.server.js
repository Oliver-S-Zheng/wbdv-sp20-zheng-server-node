const quizService = require('../services/quiz.service.server')

module.exports = function(app) {
    app.get('/api/quizzes', (req, res) =>
        res.send(quizService.findAllQuizzes()))

    app.get('/api/quizzes/:qzid', (req, res) =>
    {
        const quizId = req.params['qzid']
        res.json(quizService.findQuizById(quizId))
    })

}
