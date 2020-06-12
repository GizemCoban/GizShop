const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Orders=new Schema({
    user_id:
    {
        type:String
        
 
    },
    username:{
        type:String

    },
    address:{
        type:String
    },
    orders:[
        {
            products_id:{
                type:String
            },
            products_count:{
                type:Number
            },
            brandname:{
                type:String,
                minlength:3,
                maxlength:100
        
            },
            code:{
                type:String,
                minlength:3,
                maxlength:100
        
            },
           
           total_price:{
               type:Number

            }

        }

    ]
        
    });
module.exports=mongoose.model('Orders',Orders);