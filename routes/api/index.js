const router = require('express').Router();
const locations = require('./travelRoutes');
const trips = require('./travelRoutes');
const travellers = require('./travelRoutes');
// const travellers = require('./traveller');
// const trips = require('./trips');
// import 3 files (traveller, trips, locaitons)

// router.use for each ('/traveller, )
router.use('/location', locations);
router.use('/traveller', travellers);
router.use('/trips', trips);

module.exports = router;