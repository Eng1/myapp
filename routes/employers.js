//const auth = require('../middleware/auth');
const Joi = require ('joi');
const mongoose = require('mongoose');
const express = require('express');
const {Employer, validate} = require('../models/employer');

const router = express.Router();



router.get('/',async(req, res)=>{ 
    const employers = await Employer.find({}); //.sort('firstName');
    res.send(employers);
});

/*router.post('/', auth, async(req,res)=>{
    const {error} = validate(req.body);
   if (error)  return res.status(400).send(error.details[0].message);

    let employer = new Employer({
        empname: req.body.empname,
        empaddress: req.body.empaddress,
        mobile: req.body.mobile,
        salary: req.body.salary,
        manager: req.body.manager});
    employer= await employer.save();     
     res.send(employer);
 });*/

/*router.put('/:id', async(req, res)=>{ 
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(404).send('Invalid ID.');   
            const { error } = validate(req.body); 
            if (error) //res.send('an error occured');
            return res.status(400).send(error.details[0].message);
             const employer= await  Employer.findByIdAndUpdate(req.params.id, {empname: req.body.name},{
                new: true});
            
             
             if (!employer) return res.status(404).send('The customer with the given ID was not found');
           
            res.send(employer);
         });*/

            /*router.delete('/:id',async(req, res) => { 
                if (!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(404).send('Invalid ID.');
             const account
              = await Employer.findByIdAndRemove(req.params.id);

             if (!employer) return res.status(404).send('The account with the given ID was not found');
             
             res.send(employer);
         });*/

            /* router.get('/:id', async(req,res)=>{ 
                if (!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(404).send('Invalid ID.');
            const employer= await Employer.findById(req.params.id);
        
            if (!Employer) return res.status(404).send('The employer with the given ID was not found');
            res.send(employer);
            });*/

            /*async function updateEmployer(){
                const employer = new Employer
                ({
                name: 'new employer'
                });
                try{
            const result = await Employer.save();
            console.log(result);
               }
               catch(ex)  {
                   console.log(ex.message)
               }
            }
             updateAEmployer('5f55ceed5e7ef22464534bf7');*/
            

        module.exports = router;