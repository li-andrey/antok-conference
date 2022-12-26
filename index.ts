import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { TApplic } from './types/TApplic';
import { MongoClient } from "mongodb";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());


// MongoDB
// Connection URI
const uri =
  "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


// GET 
app.get("/api/applics", async (req: Request, res: Response) => {
    try {
    await client.connect()
        const database = client.db("antok")
        const applicsCol = database.collection<TApplic>("applics")
        const cursor = applicsCol.find()
        const applics = await cursor.toArray()
        return res.json(applics)
    }
    catch (err) {
        console.log("ERROR", err)
    }
    finally{
    await client.close()
    }
})

// POST
app.post("/api/applics", async (req: Request, res: Response) => {
    try {
        await client.connect()
        const database = client.db("antok")
        const applicsCol = database.collection<TApplic>("applics")
        const body = req.body
        const newApplic: TApplic = {
            ...body
        }
        const result = await applicsCol.insertOne(newApplic);
       return res.json(result)
    }
    catch (err) {
        res.status(400).json({
            error: 'content missing'
        })
    }
    finally{
        await client.close()
        }
})

// GET :id
app.get("/api/applics/:id", async (req: Request, res: Response) => {
    try {
        await client.connect()
        const database = client.db("antok")
        const applicsCol = database.collection<TApplic>("applics")
        const id = req.params.id
        
        const query = { _id: new mongoose.Types.ObjectId(id)} 
        const applic = await applicsCol.findOne<TApplic>(query)
        return res.json(applic)
    }
    catch (err) {
        console.log("ERROR", err)
    }
    finally{
        await client.close()
        }
})

// PATCH
app.patch('/api/applics/:id', async (req: Request, res: Response) => {
    try {
        await client.connect()
        const database = client.db("antok")
        const applicsCol = database.collection<TApplic>("applics")
        const body = req.body
        const id = req.params.id

        const filter = { _id: new mongoose.Types.ObjectId(id)} 
        const updatedApplic = {
            _id: new mongoose.Types.ObjectId(id),
         ...body
        }
        await applicsCol.replaceOne(filter, updatedApplic);
        res.json(updatedApplic)
    }
    catch (err) {
        console.log("ERROR", err)
    }    
    finally{
        await client.close()
        }
})

// DELETE
app.delete("/api/applics/:id", async (req: Request, res: Response) => {
    try {
        await client.connect()
        const database = client.db("antok")
        const applicsCol = database.collection("applics")
        const id = req.params.id
        const query = { _id: new mongoose.Types.ObjectId(id)} 
        await applicsCol.deleteOne(query);
        return res.status(204).end()
    }
    catch (err) {
        console.log("ERROR", err)
    }
    finally{
        await client.close()
        }
})


const port = process.env.PORT || 8005;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});