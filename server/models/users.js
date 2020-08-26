const mongoose=require('mongoose');
const UsersSchema= mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
    },
    position:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    }
});

module.exports=mongoose.model('User', UsersSchema);