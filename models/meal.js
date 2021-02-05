const Joi = require('joi');
const mongoose = require('mongoose');


const Meal = mongoose.model('Meal', new mongoose.Schema({
    mealName: {
        type:String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    mealDescription: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    availability: {
        type: String,
        required: true,
        enum: ['Yes', 'No']
    },
     
    mealRate: {
        type: String,
        required: true,
        minlength:1,
        maxlength: 2
    }
}));

function validateMeal(meal){
    const schema = {
        mealName: Joi.string().min(5).max(50).required(),
        mealDescription: Joi.string().min(5).max(100).required(),
        mealRate: Joi.string(1).max(2)
    };

    return Joi.validate(meal , schema);
}

exports.Meal = Meal;
exports.validate = validateMeal;