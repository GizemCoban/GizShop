const mongoose=require('mongoose');
const Schema=mongoose.Schema;


let Products=new Schema({
    // selectcategory:{
    //     type:String,
       

    // },
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
   
    feature:{
        type:String
    },
    stock:{
        type:Number
    },
    price:{
        type:Number,
        required:true
    }, 
    category_id:{
        type:String
    }, 
    productsImg: {
        type:String
    },


});

module.exports=mongoose.model('Products',Products);