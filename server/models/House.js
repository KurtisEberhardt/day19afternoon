import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
    {
    Year: {type: Number, required: true},
    Price: {type: Number, required: true},
    Model: {type: String, required: true},
    Color: {type: String, required: true},
    Description: {type: String}
    
    },
    { timestamps: true, toJSON: { virtuals: true } }
)
export default House;