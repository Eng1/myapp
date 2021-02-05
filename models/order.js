const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const { mealSchema } = require('./meal');
const { accountSchema } = require('./account');
const schema = new mongoose.Schema({
    meal: {
        type: new mongoose.Schema({
            mealName: {
                type: String,
                required: true,
                min: 5,
                max: 50
            },
            noOfMeals:{
                type: Number,
                required: true,
                min: 1,
                max: 100
           } ,
           price: {
               type: Number,
               required: true,
               min: 100,
               max: 1000
           }
        }),
        required: true
    },
    account: {
        type: new mongoose.Schema({
firstName: {
    type: String,
    required: true,
    min:5,
    max:255
},
orderNo: {
    type: String,
    required: true,
    min:1,
    max:5
},
payStatus: {
    type: String,
    required: true,
    enum: [ 'completed','not completed']
},
totalOrder: {
    type: Number,
    required: true,
    min: 100,
    max: 10000
}

        }),
        required: true
    }

});

const Order = mongoose.model('Orders', new mongoose.Schema({
    meal: {
        type: new mongoose.Schema({
            mealName: {
                type: String,
                required: true,
                min: 5,
                max: 50
            },
            noOfMeals:{
                type: Number,
                required: true,
                min: 1,
                max: 100
           } ,
           price: {
               type: Number,
               required: true,
               min: 100,
               max: 1000
           }
        }),
        required: true
    },
    account: {
        type: new mongoose.Schema({
firstName: {
    type: String,
    required: true,
    min:5,
    max:255
},
orderNo: {
    type: String,
    required: true,
    min:1,
    max:5
},
payStatus: {
    type: String,
    required: true,
    enum: [ 'completed','not completed']
},
totalOrder: {
    type: Number,
    required: true,
    min: 100,
    max: 10000
}

        }),
        required: true
    }
}));


function validateOrder(order) {
    const schema = Joi.object({
        mealId: Joi.number().required(),
        accountId: Joi.number().required()

    });
    try{
    const result = schema.validate(order, schema);
    console.log(result);
    } catch(ex) {
        console.log(ex.message);
    }

};
exports.Order = Order;
exports.validate = validateOrder;
