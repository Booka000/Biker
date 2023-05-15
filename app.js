const express = require('express');
const mongoose = require('mongoose');
const Bike = require('./models/bikes');
const Rent = require('./models/rents');
//express app
const app = express();

//connect to the database
const dbURI = '';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));


app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    Bike.find()
        .then((result) => {
            res.render('Home', { title: 'Home', bikes: result });
        })
        .catch((err) => {
            console.log(err)
        })
});

app.get('/renting/:id', (req, res) => {
    const id = req.params.id;
    Bike.findById(id)
        .then((results) => {
            res.render('Renting', { title: 'Form', bike: results })
        })
        .catch((err) => {
            consol.log(err);
        })
});

app.post('/active', (req, res) => {
    const rent = new Rent(req.body);
    rent.save()
        .then((result) => {
            res.redirect('/active/' + result._id)
        })
        .catch((err) => {
            console.log(err);
        })
});

app.get('/active/:id', (req, res) => {
    const id = req.params.id;
    Rent.findById(id)
        .then((results) => {
            res.render('active', { title: 'Active', rent: results })
        })
        .catch((err) => {
            consol.log(err);
        })
});

app.get('/counter/:id', (req, res) => {
    const id = req.params.id;
    Rent.findById(id)
        .then((results) => {
            res.render('Renting-counter', { title: 'Timer', rent: results })
        })
        .catch((err) => {
            consol.log(err);
        })
});

app.use((req, res) => {
    res.status(404).render('404', { title: 'Error' });
});


