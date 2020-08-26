const express = require ('express');
const conectDB = require ('./config/db');
const cors = require('cors');

const app= express();

//CONECTANDO A BASE DE DATOS
conectDB();

//HABILITANDO CORS
app.use(cors());

const PORT = process.env.PORT || 80;

//HABILITANDO EXPRES.JSON
app.use(express.json({extended:true}))

app.use('/api/users', require('./routes/users'));

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`)
})