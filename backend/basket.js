const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Basket=new Schema({
    user_id:
    {
        type:String
        
 
    },
    products_id:{
        type:String
    },
    stock:{
        type:Number

    }

});
module.exports=mongoose.model('Basket',Basket);