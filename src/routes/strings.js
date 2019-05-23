const express = require('express');

const router = express.Router();
const stringsController = require('../controllers/strings.js');

router.get('/hello/:string', stringsController.hello);

router.get('/hello/:string', (req, res) => {
  res.status(200).json({
    result: sayHello(req.params.string),
  });
});

router.get('/upper/:string', stringsController.upper);

router.get('/lower/:string', stringsController.lower);
// Strings 5 endpoint

router.get('/first-characters/:string', stringsController.firstChars);

// Strings 5a endpoint
router.get('/first-characters/:string', stringsController.firstChars1);

module.exports = router;
