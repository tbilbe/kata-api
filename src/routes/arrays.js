const express = require('express');

const router = express.Router();

const arraysController = require('../controllers/arrays');

router.post('/element-at-index/:index', arraysController.getNthElement);
router.post('/to-string', arraysController.arrayToCSVString);
