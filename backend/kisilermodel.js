const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let People=new Schema({   
    username:{
        type:String,
        minlength:3,
        maxlength:100
    },
    mailaddress:{
        type:String,
        required:true    
    },
    password:{
       type: String,
       required:true
       
    },
    phonenumber:{
        type:String
    },
    role:{
        type:String

    },favorites:[
        {
            type:String,
           unique: true
        }
    ]
});
module.exports=mongoose.model('People',People);