import express from "express";
import Char from "./models/char-model.js";
import Senses from "./models/senses-model.js";

const routes = express.Router();

routes.get("/:word", async (req, res) => {
    try {
        const chars = await Char.find({ 
            $or: [
                { name: req.params.word },
                { char: req.params.word }
            ] 
        });

        const words = await Promise.all(
            chars.map(async (word) => {
                const senses = await Senses.findOne({
                    name: word.name,
                    etyNum: word.etyNum
                });
                
                return {
                    name: word.name,
                    char: word.char,
                    type: word.type,
                    senses: senses.senses,
                    etyNum: word.etyNum,
                    exInfo: word.exInfo
                };
            })
        )

        res.status(200).json(words);
    } catch (err) {
        res.status(404).json(err.json);
    }
});

export default routes;