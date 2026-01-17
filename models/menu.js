import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    name:{
        required:true,type:String,
    },
    price:{
        type:Number,required: true
    },
    taste:{
        type:String,enum:["sweet","spicy","salty"]
    },
    is_drink:{
        type:Boolean,
        default: false
    },
    ingredients:{
        type:[String],
        default:[]
    },
    num_Sales:{
        type: Number,default:0
    }
})
const Menu = mongoose.model("Menu",menuSchema)

export default Menu;