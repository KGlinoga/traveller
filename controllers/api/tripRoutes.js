const express = require('express');
const router = express.Router();
const {Location,Trip,Traveller} = require('../../models');

// URL: 3001/api/ to create a new trip
router.post("/",(req,res)=>{
    Trip.create({
        trip_budget:req.body.trip_budget,
        traveller_amount:req.body.traveller_amount,
        LocationId:req.body.LocaitonId,
        TravellerId:req.body.TravellerId
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"this isn't where I parked my car!",err})
    })
})

// URL: 3001/api/whatever id number is the trip to delete
router.delete("/:id",(req,res)=>{
    Trip.destroy({
        where:{
            id:req.params.id
        }
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"I have a bad feeling about this..",err})
    })
})

module.exports = router;
