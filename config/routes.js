'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('../app/controllers');

router.get('/', ctrl.home);

module.exports = router;
