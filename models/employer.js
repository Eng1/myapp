const Joi = require('joi');
const mongoose = require('mongoose');
const employerSchema = new mongoose.Schema({
    empname: String,
    mobile: String,
    empaddress: String,
    salary: Number,
    manager: String
});

const Employer = mongoose.model('Employer', new mongoose.Schema({
    empname: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    mobile: {
        type: String,
        required: true,
        minlength:6,
        maxlength: 10
    },
    empaddress: {
        type:String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    salary: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 4
    },
    manager: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    }
}));

function validateEmployer(employer){
    const schema = {
        empname: Joi.string().min(5).max(50).required(),
        mobile: Joi.string().min(6).max(10).required(),
        empaddress: Joi.string().min(5).max(100).required(),
        salary: Joi.string().min(3).max(4).required(),
        manager: Joi.string().min(5).max(50).required(),
    };

    return Joi.validate(employer , schema);
}

exports.Employer = Employer;
exports.validate = validateEmployer;