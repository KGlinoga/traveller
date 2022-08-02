const express = require('express');
const allRoutes = require('./controllers');

const sequelize = require('./config/connection');

// sets up Express App
const app = express();
const PORT = process.env.PORT || 3001;
// Requiring our models for syncing:
const { Traveller,Location,Trip} = require('./models');

// Sets up Express app to handl data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/',allRoutes);

sequelize.sync({ force: false}).then(function() {
    app.listen(PORT, function() {
        console.log(`Now listening at http://localhost:${PORT}`);
    });
}).catch(err=>{
    console.log(err)
});
