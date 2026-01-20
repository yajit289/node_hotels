import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";


// define mongo DB Url Connection
const mongoURL = process.env.DB_URL
//const mongoURL ="mongodb+srv://yajit289_db_user:Ajit289%40@cluster0.02xgut8.mongodb.net/hotels?retryWrites=true&w=majority";
mongoose.connect(mongoURL)

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("connectd To mongo db")
})
db.on('disconnected',()=>{
    console.log("disconnectd To mongo db")
})

export default db