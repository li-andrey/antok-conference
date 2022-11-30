import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import axios from "axios"


dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Hello World From the Typescript Server!</h1>')
});

// Запрос выдает данные в нечитаемом виде (возможно проблема в Axios)
app.get("/posts", async (req: Request, res: Response) => {
    try {
        const { data } = await axios.get(
            'https://jsonplaceholder.typicode.com/posts',
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );
        return res.json(data)
    }
    catch (err) {
        console.log("ERROR", err)
    }
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});