const express = require('express');

const router = express.Router();

const booleansController = require('../controllers/booleans');

router.post('/negate', booleansController.negate);
router.post('/truthiness', booleansController.truthiness);
router.get('/is-odd/:number', booleansController.isOdd);
router.get('/:string/starts-with/:char', booleansController.startsWith);

module.exports = router;
