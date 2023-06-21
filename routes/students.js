const express = require('express')
const router = express.Router();

const studentsController = require('../controllers/StudentController')

router.get('/', studentsController.index);

router.post('/add', studentsController.add);

module.exports = router;