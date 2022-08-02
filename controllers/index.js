const express = require('express');
const router = express.Router();
const apiRoutes = require('./api')

router.get('/',(req,res)=>{
    res.send('Welcome!');
})

router.use('/api', apiRoutes);

module.exports = router;