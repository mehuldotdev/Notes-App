import mongoose, { mongo } from "mongoose"

// create schema
// create model off the schema

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,

    },
},
    {timestamps: true}
);


const Note = mongoose.model("Note", noteSchema)

export default Note