const mongoose = require('mongoose')

const shortUrlSchema  = new mongoose.Schema({
    full: {
        String,
        required: true
    },
    short: {
        type: String,
        required: true
    }

})