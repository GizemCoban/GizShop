const mongoose=require('mongoose');
const Schema=mongoose.Schema;


let Category=new Schema({
    gender:{
        type:String,
       

    },
   
    category:{
        type:String,

    }

});

module.exports=mongoose.model('Category',Category);