const mongoose = require('mongoose');
const config = require('config');
const meals = require('./routes/meals');
const accounts = require('./routes/accounts');
const restaurants = require('./routes/restaurants');
const employers = require('./routes/employers');
const orders = require('./routes/orders');
const express = require('express');
const {Mongoose} = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/restaurant1', {useUnifiedTopology : true, useNewUrlParser: true})
.then(() => console.log('Connected to MongoDB....'))
.catch(err => console.error('Could not connect to MongoDB....', err))

const mealSchema = new mongoose.Schema({
    mealName: {
        type: String,
        required: true,  //Validation
        minlength: 5,
        maxlength: 255
    },
    mealDescription: String,
    availability: String,
    noOfMeals: Number,
    mealPrice: Number,
    mealRate: String
});

const Meal = mongoose.model('Meal', mealSchema);
async function createMeal(){
    const meal = new Meal({
        mealName:  'Pitza',
        mealDescription: 'Cheese',
        availability: 'Yes',
        noOfMeals: Number,
        mealPrice: 50,
        mealRate: 'A'
    });
    const result = await meal.save();
    console.log(result);
};
 //createMeal();

 /*const Order = mongoose.model('Order', new mongoose.Schema({
   orderNo: String,
    payWay: String,
    payStatus: String,
    totalOrder: Number,
    meal: mealSchema,
}));

async function createOrder(orderNo,payWay,payStatus,totalOrder){
    const order = new Order({
    orderNo,
    payWay,
    payStatus,
    totalOrder,
    meal
});
try{
const result = await order.save();
console.log(result);
}catch(ex){
    console.log(ex.message);
}
}
async function listOrders() {
    try{
    const orders = await Order.find();
    console.log(orders);
    }catch(ex){
        orders.status(500).send('Something failed');
    }
}*/


const accountSchema = new mongoose.Schema({
     address: String,
     firstName: String,
     payway: ['viza','mastercard','paypal'],
     tags: {
        type: Array,
        validate: {
            validator: function(v){
                return v && v.length > 0;
            },
            message :' An order should have at least one tag.'
        }},
     lastName: String,
     email: String,
     mobile: String,
     password: String,
     accountRate: String
});

const Account = mongoose.model('Account', new mongoose.Schema({
    address: String,
    firstName: {
        type: String,
        required: true,  //Built in validation
        minlength: 5,
        maxlength: 255
    },
    payway: {
        type: String,
        required: true,
        enum:['viza','mastercard','paypal']},
    tags: {
       type: Array,
       validate: {
           validator: function(v){
               return v && v.length > 0;
           },
           message :' An order should have at least one tag.'
       }},
    lastName: String,
    email: String,
    mobile: String,
    password: String,
    accountRate: String
}));



async function createAccount(){
    const account = new Account({
        address:'10 Nile_street,Sohag',
        firstName:'Hanoy',
        payway: 'paypal',
        tags: ['paypal'],
        lastName: 'Aly',
        email: 'hanoy@gmail .com',
        mobile:'0111122113',
        password:'123456',
        accountRate:'3'
    });
    const result = await account.save();
    console.log(result);
}
createAccount();

const Order = mongoose.model('Order', new mongoose.Schema({
    orderNo: String,
     payStatus: String,
     totalOrder: Number,
     account: accountSchema,
 }));
 
 async function createOrder(orderNo,payStatus,totalOrder,account){
     const order = new Order({
     orderNo, // paw way tranmitted to Account
     payStatus,
     totalOrder,
     account
 });
 try{
 const result = await order.save();
 console.log(result);
 }catch(ex){
     console.log(ex.message);
 }
 }
 async function listOrders() {
     try{
     const orders = await Order.find();
     console.log(orders);
     }catch(ex){
         orders.status(500).send('Something failed');
     }
 }
 
 //createOrder(('3'),('not completed'),(1000),new Account({ firstName: 'Ahmed'}));

const employerSchema = new mongoose.Schema({
    empname: String,
    mobile: String,
    empaddress: String,
    salary: Number,
    admin: String
});

const Employer = mongoose.model('Employer', employerSchema);

async function createEmployer() {
    const employer = new Employer({
        empname:'Zohdy',
        mobile:'01025463977',
        empaddress: '1 Elnady st',
        salary: 6500,
        Manager: 'Magdy'
     });
     try{
     const result = await employer.save();
     console.log(result);
     }catch(ex){
         console.log(ex.message);
     }
}

//createEmployer();


const Restaurant = mongoose.model('Restaurant', new mongoose.Schema({
    name: String,
    //address: String,
    employers: [employerSchema]
}));

async function createRestaurant(name,employers){ // one property only for Restaurant
    const restaurant = new Restaurant({
    name,
    employers
});
try{
const result = await restaurant.save();
console.log(result);
}catch(ex){
    console.log(ex.message);
}
}
async function listRestaurants() {
    try{
    const restaurants = await Restaurant.find();
    console.log(restaurants);
    }catch(ex){
        restaurants.status(500).send('Something failed');
    }
}

async function updateEmployer(restaurantId) {
    const restaurant = await Restaurant.updateOne({_id: restaurantId},{
        $unsetset: {
            'employer.empname': 'John Smith'
        }
    });
   
}

async function addEmployer(restaurantId, employer){
    const restaurant = await Restaurant.findById(restaurantId);
    restaurant.employers.push(employer);
    restaurant.save(); // to save added employer through restaurant as ite embedded to restaurant
}

async function removeEmployer(restaurantId, employerId){
    const restaurant = await Restaurant.findById(restaurantId);
    const employer = restaurant.employers.id(employerId);
    await employer.remove();
    await restaurant.save();
}

//addEmployer('600a82695fe41c3738a2da0b', new Employer({empname: 'Amy'}));

//removeEmployer('600a82695fe41c3738a2da0b','600a835df9a8b72188bde2b6');// note mapping 215, 224

createRestaurant('Gameela', [
    new Employer({empname: 'Aly'}),
    new Employer({empname: 'Ayman'})
]);

//updateEmployer('6009182f6b8cb8146c901fef');
