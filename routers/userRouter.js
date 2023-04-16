const Model =require('../models/usrModel');
const {Router} = require('express');
const router = Router();

router.post('/add',(req,res)=>{
    console.log(req.body);
    // res.send('response from user router');
    new Model(req.body).save()
    .then((result) => {
        res.json(result)
        
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
        
    });
    
});

router.post('/authenticate',(req,res)=>{
    Model.findOne(req.body)
    .then((result) => {
        if(result) res.json(result);
        else res.status(401).json({message:'Invalid credentials'})

        
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
        
    });
})


module.exports=router;
