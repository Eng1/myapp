const express = require('express');
const router = express.Router();

router.get('/',async (req,res) => {
 try{
     const restaurants = await Restaurant.find().sort('name');
     res.send(restaurants);
 }
 catch(ex){
     res.status(500).send('Something failed');
 }

});

module.exports = router;