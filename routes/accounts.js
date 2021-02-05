//const auth = require('../middleware/auth');
const Joi = require ('joi');
const mongoose = require('mongoose');
const express = require('express');
const {Account, validate} = require('../models/account');

const router = express.Router();



router.get('/',async(req, res)=>{ 
    const accounts = await Account.find(); //.sort('firstName');
    res.send(accounts);
});

/*router.post('/', auth, async(req,res)=>{
    const {error} = validate(req.body);
   if (error)  return res.status(400).send(error.details[0].message);

    let customer= new Account({
        address: req.body.address,
        firstNameame: req.body.firstNameame,
        lastName: req.body.lastName,
        payway:
        email: req.body.email,
        password: req.body.password,
        mobile: req.body.mobile,
        accountRate: req.body.accounRate});//id:customers.length +1,  make by database
    customer= await customer.save();     
     res.send(customer);
 });*/

/*router.put('/:id', async(req, res)=>{ 
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(404).send('Invalid ID.');   
            const { error } = validate(req.body); 
            if (error) //res.send('an error occured');
            return res.status(400).send(error.details[0].message);
             const account= await  Account.findByIdAndUpdate(req.params.id, {name: req.body.name},{
                new: true});
            
             
             if (!account) return res.status(404).send('The customer with the given ID was not found');
           
            res.send(account);
         });*/

            /*router.delete('/:id',async(req, res) => { 
                if (!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(404).send('Invalid ID.');
             const account
              = await Account.findByIdAndRemove(req.params.id);

             if (!account) return res.status(404).send('The account with the given ID was not found');
             
             res.send(account);
         });*/

            /* router.get('/:id', async(req,res)=>{ 
                if (!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(404).send('Invalid ID.');
            const account= await Account.findById(req.params.id);
        
            if (!Account) return res.status(404).send('The account with the given ID was not found');
            res.send(account);
            });*/

            /*async function updateAccount(){
                const account= new Account
                ({
                name: 'new accunt'
                });
                try{
            const result = await Account.save();
            console.log(result);
               }
               catch(ex)  {
                   console.log(ex.message)
               }
            }
             updateAccount('5f55ceed5e7ef22464534bf7');*/
            

        module.exports = router;