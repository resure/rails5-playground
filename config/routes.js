'use strict';

const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap
const path = require('path');
const ctrl = require(path.join(__dirname, '../app/controllers/'));

router.get('/', ctrl.home);

module.exports = router;
