
const express = require('express');
const { text } = require('stream/consumers');

const app = express();


app.use('/add-product', (req, res, next) => {
    console.log("This always runs");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button>Add-Product</button></form/>')
    next();
})

app.use('/product', (req, res, next) => {
    console.log("In the middleware");
    console.log(req.body);
    // res.send('<form action="/product" method="POST"><input type="text" name="title"><button>Add-Product</button></form/>')
    res.redirect('/')
    next();
});

app.use('/', (req, res, next) => {
    console.log(req.body);
    res.send('<h1>Hello from express!</h1>')
})

app.listen(3000);

