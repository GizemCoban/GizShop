const People=require('./kisilermodel.js')
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let Address=new Schema({
    username:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    province:{
        type:String,
        required:true

    },

    county:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    addressTitle:{
        type:String,
        required:true
    },
   user_id:
        {
            type:String,
          //ref:'People'
     
        },
});
module.exports=mongoose.model('Address',Address);