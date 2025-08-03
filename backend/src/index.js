import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connect } from "mongoose";
import { connectDB } from "../config/db.js";
import dotenv from "dotenv"
import cors from "cors"

const app = express()

dotenv.config()
const PORT = process.env.PORT

//middleware
app.use(express.json()) // this middleware allows to use req.body
app.use(cors())
app.use("/api/notes", notesRoutes);

connectDB().then(app.listen(5001, ()=>{
    console.log("Server running on port :", PORT);
    
}))