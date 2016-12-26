'use strict';

var router = require('express').Router();

router.get('/', function (req, res) {res.render('index', {title: '巨难吃'});});

module.exports = router;
