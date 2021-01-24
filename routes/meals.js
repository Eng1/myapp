const express = require('express');
const router = express.Router();

router.get('/',async (req,res) => {
 try{
     const meals = await Meal.find().sort('name');
     res.send(meals);
 }
 catch(ex){
     res.status(500).send('Something failed');
 }

});

module.exports = router;