const router = require('express').Router();
const location = require('../../models/location');
const traveller = require('../../models/traveller');
const trip = require('../../models/trip');

router.get('/traveller', (req,res)=> {
    res.json(traveller);
})


module.exports = router;