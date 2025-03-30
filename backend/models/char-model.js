import mongoose from "mongoose";

const charSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        char: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        exInfo: {
            type: String,
            required: false
        },
        etyNum: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Char = mongoose.model("Char", charSchema, "chars");
export default Char;