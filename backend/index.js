require("dotenv").config();
const express = require("express");
const connection = require("./config/db.js");
const noteRouter = require("./routes/notes.route.js");
const cors = require("cors")


const PORT = process.env.PORT || 8989
const app = express();


// Middlewares
app.use(express.json())
app.use(cors())
app.use("/notes",noteRouter)



// Health Check
app.get("/",(req,res)=>{
    res.send("Server is running fine")
})


app.listen(PORT,async()=>{
    await connection;
    console.log(`Server is running on port: ${PORT} and connected to Database`)
})