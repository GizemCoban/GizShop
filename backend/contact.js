const mongoose=require('mongoose');
const Schema=mongoose.Schema;


let Contact=new Schema({
    username:{
        type:String,
        minlength:3,
        maxlength:100

    },
    mailaddress:{
        type:String,
        minlength:3,
        maxlength:100

    },
   
    subject:{
        type:String
    },
    
     
    message: {
        type:String
    },


});

module.exports=mongoose.model('Contact',Contact);