const {Restaurant, validate} = require('../models/restaurant');
const {Employer} = require('../models/employer');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//const bodyParser = require('body-parser'); it's extra
router.get('/', async(req, res) => {
    const restaurants = await Restaurant.find();//.sort('name');
    res.send(restaurants);
});

module.exports = router;

/*router.post('/', async(req,res) => {
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const employer = await Employer.findById(req.body.employerId);
    if(!employer) return res.status(400).send('Invalid employer');//!genre i.e. not exist
    
    const restaurant = new Restaurant({
       name: req.body.name,
       address: req.body.address,
       mobile: req.address.mobile,
       employer: {
         _id: employer._id,
        empname: employer.empname,
        empaddress: req.body.empaddress,
        mobile: req.body.mobile,
        salary: req.body.salary,
        manager: req.body.manager
       },
        });
try{
    const result = await reataurant.save();
    console.log(result);
    res.send(restaurant);
}catch(ex){
    console.log(ex.message);
}
     
});

router.get('/:id' ,  async (req,res) => {
    const employer = await Employer.findById(req.body.id);

    if (!employer) return res.status(404).send('employer was not found');

    let restaurant = new Restaurant({
        name: req.body.name,
        address: req.body.address,
        mobile: req.body.mobile,
        employer: {
            _id: employer._id,
           empname: employer.empname,
           empaddress: req.body.empaddress,
           mobile: req.body.mobile,
           salary: req.body.salary,
           manager: req.body.manager
          },
    });
    movie = await restaurant.save();
   
    res.send(restaurant);
});

router.put('/:id', async (req, res) => {
const { error} = validate(req.body); 
if(error) res.send({error: true, msg:'an error occured'});
const restaurant = await Restaurant.findByIdAndUpdate(req.params.id,
    {
        name: req.body.name,
        address: req.body.address,
        mobile: req.body.mobile
    }, { new: true});

    if (!resraurant) return res.status(404).send('The restaurant with the given ID NOT FOUND');

    res.send(restaurant);
})*/

//module.exports = router;