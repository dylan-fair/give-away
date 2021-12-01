const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;


// Express MiddleWare
app.use(express.json())
app.use(express.urlencoded({extended: false}))












// Starts Server
sequelize.sync({force: false}).then(()=>{
    app.listen(PORT, ()=> console.log('SERVER RUNNING'))
})


