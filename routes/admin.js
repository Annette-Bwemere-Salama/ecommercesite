const express = require('express');
const path = require('path')
const router = express.Router();

const rooDir = require('../util/path')

//admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rooDir, 'views', 'add-product.html'))
});


// /admin/add-product =>POST

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router