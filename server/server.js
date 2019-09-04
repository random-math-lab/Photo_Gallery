const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const app = express();
const PORT = 3002;

// app.use(morgan('dev'))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allows-Headers", "Origin, X-Request-With, Content-Type, Accept");
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('client/dist'));

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

app.get('/api/photo/:id', (req, res) => {
    db.listingPhotos( (err, data) => {
        if(err) {console.log(err); return; }
        res.send(data) 
    });
})


