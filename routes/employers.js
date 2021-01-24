const express = require('express');
const router = express.Router();

router.get('/',async (req,res) => {
 try{
     const employers = await Employer.find().sort('name');
     res.send(employers);
 }
 catch(ex){
     res.status(500).send('Something failed');
 }

});

module.exports = router;