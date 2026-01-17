import mongoose from "mongoose";

//person Schema

const PersonSchema = new mongoose.Schema({
    name:{
        required:true,
        type: String,
    },
    age:{
        type: Number,
        required:true
    },
    work:{
        type: String,
        required: true,
        enum:['chef',"waiter",'manager']
    },
    email:{
        type:String,
        require:true,
        unique: true
    },
    address:{
        type: String
    },
    salary:{
        type:Number
    }
})

// create Person Model
const Person = mongoose.model('Person',PersonSchema)

export default Person