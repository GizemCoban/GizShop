const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const imgSchema = new Schema({
    productsImg: {
        type:String
    },
    product_id:{
        type:String
    }
    
})

module.exports = mongoose.model('imgSchema', imgSchema)
