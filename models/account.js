const Joi = require('joi');
const mongoose = require('mongoose');


const Account = mongoose.model('Account', new mongoose.Schema({
    address: {
        type:String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    firstName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    payway: {
        type: String,
        required: true,
        enum: ['viza', 'mastercard','paypal']
    },
    lastName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50 
    },
    email: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 50
    },
    password:{
        type: String,
        required: true,
        minLength: 10,
        maxLength: 50  
    },
    mobile: {
        type: String,
        required: true,
        minlength:6,
        maxlength: 10
    },
    accountRate: {
        type: String,
        required: true,
        minlength:1,
        maxlength: 2
    }
}));

function validateAccount(account){
    const schema = {
        firstName: Joi.string().min(5).max(50).required(),
        lastName: Joi.string().min(5).max(50).required(),
        address: Joi.string().min(5).max(100).required(),
        email: Joi.string().min(10).max(50),
        password: Joi.string().min(6).max(10),
        mobile: Joi.string().min(5).max(50).required(),
        accountRate: Joi.string(1).max(2)
    };

    return Joi.validate(account , schema);
}

exports.Account = Account;
exports.validate = validateAccount;