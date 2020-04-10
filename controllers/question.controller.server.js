const questionService = require("../services/question.service.server")

module.exports = (app) => {
    app.get("/api/quizzes/:qid/questions", (req, res) => {
        const quizId = req.params['qid']
        res.json(questionService.findQuestionsForQuiz(quizId))
    })
}
