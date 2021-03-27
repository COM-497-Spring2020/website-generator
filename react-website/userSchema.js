const { text } = require('body-parser')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    restaurant_name: {
        type: String,
        maxLength: 100,
        required: [true, 'Restaurant name is required']
    },
    Phone_number: {
        type: Number,
        required: [true, 'Phone number is required']
    },
    About: {
        type: Text,
        required: [true, 'About information is required']
    },
    date_opened: {
        type: Date,
        required: [true, 'Opening date is required']
    },
    street_address: {
        type: String,
        required: [true, 'Street name is required']
    },
    city: {
        type: String,
        required: [true, 'City name is required']
    },
    state: {
        type: String,
        required: [true, 'State name is required']
    },
    /*Menu: {
        type: File,
        required: [true, 'Menu pdf file is required']
    },
    Logo: {
        type: File,
        required: [true, 'Logo png or jpg file is required']
    }*/
})

module.exports = userSchema