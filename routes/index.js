const studentsRouter = require('./students')

function route(app) {
    app.use('/students', studentsRouter)
}

module.exports = route;