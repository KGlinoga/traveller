const express = require('express');
const router = express.Router();
const {Location, Trip,Traveller} = require('../../models');

// totally my try
// const location = require('../../models/Location');
// const traveller = require('../../models/Traveller');
// const trip = require('../../models/Trip');

// /api/travellers
router.get('/', (req,res)=> {
    // console.log is my extra line to confirm stuff went thru
    console.log('get request for /api/travellers good');
    Traveller.findAll().then((data)=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"dang! gotta try again!",err})
    })
})

// /api/travellers/:id to get a traveller by ID??
router.get('/:id', async (req, res) => {
      Traveller.findByPk(req.params.id,{
        include:[{
            model:Trip,
            include:[Location]
        }]
      }).then(data=>{
        res.json(data)
      }).catch(err=>{
        res.status(500).json({msg:"FML!!",err})
      })
    })

// URL: 3001/api/ to create a NEW Traveller
router.post("/",(req,res)=>{
    Traveller.create({
        name:req.body.name,
        email:req.body.emal
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"huh, this isn't where I parked my car..",err})
    })
})

// 3001/api/whatever id number of the traveller to delete
router.delete("/:id",(req,res)=>{
    Traveller.destroy({
        where:{
            id:req.params.id
        }
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"*record scratch.. backs out slowly...*",err})
    })
})

module.exports = router;