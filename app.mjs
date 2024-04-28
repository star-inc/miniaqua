import {
    existsSync,
    readFileSync,
} from "node:fs"

import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: true,
}));

app.get("/:dominName/*", (req, res) => {
    const {dominName} = req.params;
    const resourcePath = req.params[0];

    const queryPath = `data/${dominName}/${resourcePath}.json`;
    if (existsSync(queryPath)) {
        const text = readFileSync(queryPath);
        const data = JSON.parse(text);
        res.json(data);
    } else {
        res.status(404).send("Not Found");
    }
})

app.listen(3100);
