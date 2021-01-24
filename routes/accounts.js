const express = require('express');
const router = express.Router();

router.get('/',async (req,res) => {
 try{
     const accounts = await Account.find().sort('name');
     res.send(accounts);
 }
 catch(ex){
     res.status(500).send('Something failed');
 }

});

module.exports = router;