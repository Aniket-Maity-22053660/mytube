import "dotenv/config"
import connectDB from "./db/index.js"
import app from "./app.js"





connectDB().then(
    app.listen(process.env.PORT || 8000, ()=>{
        console.log("Server is running at "+"http://localhost:8000")
    })
).catch((e)=>{
    console.log(e)
})