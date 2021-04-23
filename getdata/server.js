const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');

//defining ejs file
app.set('view engine', 'ejs');
//connection to database named mytable where information is stored
mongoose.connect('mongodb+srv://bjorn:bjorn12345@project.ihmpb.mongodb.net/mytable?retryWrites=true&w=majority');
//getting the data based on schema from mongo
const resschema = {
    restaurant_name: String,
    phone_number:Number,
    about: String,
    street_address: String,
    city:String,
    stateus:String,
    date:Date
}
//getting the actual data from database and passing it to .ejs file so it gets displayed
const mytable = mongoose.model('websites', resschema);

app.get('/', (req, res) => {
    mytable.find({}, function(err, websites) {
        res.render('index', {
            websitesList: websites
        })
    })
})
//setting the port to 8000
//run the server with npm start and go to localhost:8000
app.listen(8001, function() {
    console.log('server is up');
})