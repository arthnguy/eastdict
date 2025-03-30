import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import routes from "./routes.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors({
    origin: process.env.ORIGIN,
    methods: ["GET"],
    allowedHeaders: ["Access-Control-Allow-Origin"]
}));
app.use("/get", routes);

mongoose.connect(process.env.ATLAS_URI)
    .then(() => {
        console.log("Connected to database");
    })
    .catch((error) => {
        console.log("Could not connect to database");
        console.log(error);
    })

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});