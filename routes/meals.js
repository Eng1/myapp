//const auth = require('../middleware/auth');
const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const {Meal, validate} = require('../models/meal');

const router = express.Router();



router.get('/',async(req, res)=>{ 
    const meals = await Meal.find(); //.sort('firstName');
    res.send(meals);
});

/*router.post('/', auth, async(req,res)=>{
    const {error} = validate(req.body);
   if (error)  return res.status(400).send(error.details[0].message);

    let meal= new Meal({
        mealName: req.body.mealName,
    mealDescription: req.body.mealDescription,
    availability: req.body.availability,
    noOfMeals: req.body.noOfMeals,
    mealPrice: req.body.mealPrice,
    mealRate: req.body.mealRate});
    meal= await meal.save();     
     res.send(meal);
 });*/

/*router.put('/:id', async(req, res)=>{ 
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(404).send('Invalid ID.');   
            const { error } = validate(req.body); 
            if (error) //res.send('an error occured');
            return res.status(400).send(error.details[0].message);
             const meal = await Meal.findByIdAndUpdate(req.params.id, {name: req.body.name},{
                new: true});
            
             
             if (!meal) return res.status(404).send('The meal with the given ID was not found');
           
            res.send(meal);
         });*/

            /*router.delete('/:id',async(req, res) => { 
                if (!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(404).send('Invalid ID.');
             const meal
              = await Meal.findByIdAndRemove(req.params.id);

             if (!meal) return res.status(404).send('The account with the given ID was not found');
             
             res.send(meal);
         });*/

            /* router.get('/:id', async(req,res)=>{ 
                if (!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(404).send('Invalid ID.');
            const meal = await Meal.findById(req.params.id);
        
            if (!Meal) return res.status(404).send('The meal with the given ID was not found');
            res.send(meal);
            });*/

            /*async function updateMeal(){
                const meal = new Meal
                ({
                name: 'new meal'
                });
                try{
            const result = await Meal.save();
            console.log(result);
               }
               catch(ex)  {
                   console.log(ex.message)
               }
            }
             updateMeal('5f55ceed5e7ef22464534bf7');*/
            

        module.exports = router;