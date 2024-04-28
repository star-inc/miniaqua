import {
    existsSync,
    readFileSync,
} from "node:fs"

import express from 'express';
import cors from 'cors';
import normalizePath from 'normalize-path';

const app = express();

app.use(cors({
    origin: true,
}));

app.get("/", (_, res) => {
    res.send("miniaqua");
});

app.get("/:dominName/*", (req, res) => {
    const { dominName } = req.params;
    const resourcePath = normalizePath(req.params[0]);

    const queryPath = `data/${dominName}/${resourcePath}.json`;
    if (existsSync(queryPath)) {
        const text = readFileSync(queryPath);
        const data = JSON.parse(text);
        res.json(data);
    } else {
        res.status(404).send("Not Found");
    }
})

app.listen(3100, () => {
    console.info("miniaqua");
    console.info('started on port 3100');
    console.info('listening at http://localhost:3100');
});
