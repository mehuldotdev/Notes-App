import mongoose from "mongoose"

export const connectDB = async()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected");
        
    } catch (error) {
        console.log("An error occurred", error);
        process.exit(1)
    }
}