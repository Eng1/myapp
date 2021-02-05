const Joi = require  ('joi');
const mongoose =require('mongoose');
const { employerSchema } = require('./employer');

const Restaurant = mongoose.model('Restaurant', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 5,
        max: 50
    },
    employers: {
        type: [employerSchema],
        required: true
    },
   

}));

function validateRestaurant(restaurant) {
    const schema = {
        name: string().min(5).max(50).required(),
        employerId: string().required(),
      
    };

    return validate(restaurant, schema);
}

exports.Restaurant = Restaurant;

exports.validate = validateRestaurant;

