import mongoose from "mongoose";

const sensesSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        senses: {
            type: Map,
            of: [String],
            required: true
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

const Senses = mongoose.model("Senses", sensesSchema, "dump");
export default Senses;