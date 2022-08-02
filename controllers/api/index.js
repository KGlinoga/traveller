const express = require('express');
const router = express.Router();
const locations = require('./locationRoutes');

const locationRoutes = require("./locationRoutes");
const travellerRoutes = require('./travellerRoutes');
const tripRoutes = require('./tripRoutes');
// const travellers = require('./traveller');<~this was before I updated the things to match Joe's Demo
// const trips = require('./trips');
// import 3 files (traveller, trips, locaitons)

// filepath: /api/ (I think??)
router.get('/',(req,res)=>{
    res.send('inside api folder')
})

// router.use for each routes folder
router.use('/locations', locationRoutes);
router.use('/travellers', travellerRoutes);
router.use('/trips', tripRoutes);

module.exports = router;