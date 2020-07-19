const mongoose = require('mongoose');
require('mongoose-currency');
//const Currency = mongoose.type.Currency;

const Schema = mongoose.Schema;


const commentSchema = new Schema({
    rating:{
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    }
},
    {
        timestamps: true
});

const dishSchema = new Schema({
        name:{
            type:String,
            required:true,
            unique:true
        },
        description:{
            type:String,
            required:true
        },
        image:{
            type: String,
            //required: true
        },
        category:{
            type: String,
            required: true
        },
        label:{
            type: String,
            required: true
        },
        // price:{
        //    // type: Currency,
        //     required: true,
        //     min: 0
        // },
        featured:{
            type: Boolean,
            default: false
        },
        comment:[commentSchema]
},
{
            timestamps:true
        
});

var Dishes = mongoose.model('Dishes',dishSchema);
module.exports = Dishes;