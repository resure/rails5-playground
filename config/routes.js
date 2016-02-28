'use strict';

const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap
const ctrl = require('../app/controllers');

router.get('/', ctrl.home);

module.exports = router;
