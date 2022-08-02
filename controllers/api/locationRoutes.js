const express = require('express');
const router = express.Router();
const {Location, Trip, Traveller} = require('../../models');

// URL: 3001/api/ to see all the things
router.get('/',(req,res)=>{
    Location.findAll().then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"bummer!!",err})
    })
})

// URL: 3001/api/whatever numer to see trips by number
router.get("/:id",(req,res)=>{
    Location.findByPk(req.params.id,{
        include:[{
            model:Trip,
            include:[Traveller]
        }]
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"derp! nothing to see here!",err})
    })
})

// URL: 3001/api/ to ADD an entry
router.post('/',(req,res)=>{
    Location.create({
        location_name:req.body.location_name
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"dang! this isn't where I parked my car!",err})
    })
})

// URL: 3001/whatever number is it to DELETE an entry
router.delete("/:id",(req,res)=>{
    Location.destroy({
        where:{
            id:req.params.id
        }
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"FML!! Gotta try again!",err})
    })
})

module.exports = router;