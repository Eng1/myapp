const Joi = require('joi');
const { Order, validate } = require('../models/order');
const  {Account}  = require('../models/account');
const { Meal } = require('../models/meal');
const mongoose = require('mongoose');
//const Fawn = require('fawn');
const express = require('express');
const router = express.Router();

//Fawn.init(mongoose);

router.get('/', async (req, res) => {
    const orders = await Order.find().sort('-dateOut');
    res.send(orders);
});
const schema = Joi.object({
    mealId:Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
    accountId: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()

});
router.post('/', async(req, res) => {
    const { error } = schema.validate(req.body);
    if (error)    return res.status(400).send(error.details[0].message);
    
/*if (!mongoose.Types.ObjectId.isValid(req.body.customerId)) 
    return res.status(400).send('Invalid customer...');*/

    const meal = await Meal.findById(req.body.mealId);
    if (!meal) return res.status(400).send('Invalid meal.');

    console.log("valid meal", meal, {...meal}.mealPrice, meal.exec())
     
    if (meal.availability === 'No')  return res.status(400) ('Meal not prepared');
    /*if(!mongoose.Types.ObjectId.isValid(req.body.movieId)) 
    return res.status(400).send('Invalid movie.');*/

  const account = await Account.findById(req.body.accountId);
    if (!account) return res.status(400).send('Invalid account.');
    console.log("accound finded");
    //if (movie.numberInStock === 0) return res.status(400).send('Movie not in Stock');
    
    return;
    let order = new Order({   // Rental can be changed , so let not const
       meal : {
           mealName : meal.mealName,
           noOfMeals : 99,
           price : meal.price
       },
       account : {
           firstName : account.firstName,

       }
        
    });
    //totalOrder = noOfMeals*price;

    order = await order.save();

    res.send(order);

    
});



/*router.get('/:id', async (req, res) => {
    const rental = await Rental.findById(req.params.id);

    if (!genre) return res.status(404).send('Invalid ID was not found');

    let movie = new Movie({
        title: req.body.title,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    });
    movie = await movie.save();

    res.send(movie);
});

router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    //if (error) return res.status(400).send(error.details[0].message);
if (error) res.send({ error: true, msg: 'an error occured' });
    const customer = await Customer.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name,
            isGold: req.body.isGold,
            phone: req.body.phone
        }, { new: true });

    if (!meal) return res.status(404).send('The meal with the given ID NOT FOUND');

    res.send(customer);
})*/

module.exports = router;

//module.exports = router;

//fs.dailyRentalRate();

//http.createServer();