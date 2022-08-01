const router = require('express').Router();
const location = require('../../models/location');
const traveller = require('../../models/traveller');
const trip = require('../../models/trip');
// /api/travellers
router.get('/', (req,res)=> {
    console.log('get request for /api/travellers good')
    traveller.findAll().then((travellerSeedData) => {
        res.json(travellerSeedData);
    });
});
// /api/travellers/:id 
router.get('/:id', async (req, res) => {
      res.render('all');
    });

module.exports = router;