import mongoose from "mongoose";


// define mongo DB Url Connection
const mongoURL = 'mongodb://127.0.0.1:27017/hotels'

mongoose.connect(mongoURL)

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("connectd To mongo db")
})
db.on('disconnected',()=>{
    console.log("disconnectd To mongo db")
})

export default db