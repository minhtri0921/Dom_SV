const mysql2 = require('mysql2')
var configDB = {
    host: 'localhost',
    user: "root",
    password: "mt2109",
    database: 'studentss'
};

class StudentsController {


    async index(req, res) {
        try {
            var con = mysql2.createConnection(configDB);// Tạo connection
            var course = await new Promise((resolve, rejects) => {
                con.query('SELECT * FROM students', function (err, result) {
                    if (err) rejects(err);
                    resolve(result)
                })

            })
            res.status(200).send(course);

        } catch (err) {
            res.status(500).send(err);
        } finally {
            con.end();// Đóng connection
        }
    }
}

module.exports = new StudentsController();