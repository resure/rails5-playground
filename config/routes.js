'use strict';

const express = require('express');
/* eslint new-cap: 0 */
const router = express.Router();
const ctrl = require('../app/controllers');

router.get('/', ctrl.home);

module.exports = router;
