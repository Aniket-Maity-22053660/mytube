import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("db connected!")
    }catch(e){
        console.log(e)
        process.exit(1)
    }
}

export default connectDB