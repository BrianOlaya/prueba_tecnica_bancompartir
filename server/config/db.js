const mongoose = require ('mongoose');

require('dotenv').config({path:'.env'});

const conectDB = async ()=>{
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })
        console.log('DB conected')
    } catch (error) {
        console.log(error);
        process.exit(1); //DETIENE LA APP EN CASO DE ERROR
    }
}

module.exports = conectDB;