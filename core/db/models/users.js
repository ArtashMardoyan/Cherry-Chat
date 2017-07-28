const mongoose = require('mongoose');
const connection = require('./../index');

connection.connect();

let UsersScheme = new mongoose.Schema({
    fullName: {
        type: String,
        minlength: 2,
        required: true,
    },
    email: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minlength: 6,
        required: true
    },
    date:{
        year: {
            type: Number,
            required: true
        },
        month: {
            type: String,
            required: true
        },
        day: {
            type: Number,
            required: true
        }
    }
});

module.exports = mongoose.model('users', UsersScheme);
