const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    
    card: {

        number: {
            type: String,
            required: true},
            month: {
                type: String,
                required: true},
                year: {
                    type: String,
                    required: true},
                    cvc: {
                        type: String,
                        required: true},
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
})

module.exports = mongoose.model('Cart', Schema)