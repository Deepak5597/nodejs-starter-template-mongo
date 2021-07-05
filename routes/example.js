const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/example')


const use = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

router.get('/', use(exampleController.getAllExamples));
router.get('/:id', use(exampleController.getAllExamplesById));

module.exports = router;