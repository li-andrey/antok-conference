import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { TApplic } from './types/TApplic';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

let applics: TApplic[] = [
    {
        "user_id": 1,
        "fio": "Тест Тестович",
        "fio_eng": "Test Testovich",
        "birth_date": "2000-01-01",
        "sex": "male",
        "post_address": "Moscow",
        "email": "test@test.com",
        "phones": "+77777777",
        "edu_institute": "MGU",
        "edu_institute_address": "Moscow",
        "edu_specialization": "Programmist",
        "uch_stepen": "Magister",
        "work_company": "Test&Co",
        "work_start_year": 2022,
        "work_department": "IT",
        "work_position": "Junior spicialist",
        "work_specialization": "Frontend",
        "public_organizations": "test",
        "antok_city": "test",
        "science_interests": "test",
        "conf_topic": "test",
        "conf_section": "test",
        "conf_coauthors": "test",
        "participation_type": "test",
        "created_at": "2012-01-26T13:51:50.417Z",
        "updated_at": "2012-01-26T13:51:50.417Z",
        "need_compensation": false,
        "inn": "test",
        "snils": "test",
        "registration": "test",
        "phone_work": "test",
        "phone_home": "test",
        "uch_zvanie": "test",
        "work_city": "test",
        "work_country": "test",
        "acad_position": "test",
        "work_company_short": "test",
        "need_hotel": "test",
        "birth_year": 2000
    },
    {
        "user_id": 2,
        "fio": "Тестa Тестовична",
        "fio_eng": "Testa Testovichna",
        "birth_date": "2000-01-01",
        "sex": "female",
        "post_address": "Moscow",
        "email": "testa@test.com",
        "phones": "+78888888",
        "edu_institute": "MGU",
        "edu_institute_address": "Moscow",
        "edu_specialization": "Programmist",
        "uch_stepen": "Magister",
        "work_company": "Test&Co",
        "work_start_year": 2022,
        "work_department": "IT",
        "work_position": "Junior spicialist",
        "work_specialization": "Frontend",
        "public_organizations": "test",
        "antok_city": "test",
        "science_interests": "test",
        "conf_topic": "test",
        "conf_section": "test",
        "conf_coauthors": "test",
        "participation_type": "test",
        "created_at": "2012-01-26T13:51:50.417Z",
        "updated_at": "2012-01-26T13:51:50.417Z",
        "need_compensation": false,
        "inn": "test",
        "snils": "test",
        "registration": "test",
        "phone_work": "test",
        "phone_home": "test",
        "uch_zvanie": "test",
        "work_city": "test",
        "work_country": "test",
        "acad_position": "test",
        "work_company_short": "test",
        "need_hotel": "test",
        "birth_year": 2000
    }
]

// GET 
app.get("/api/applics", async (req: Request, res: Response) => {
    try {
        return res.json(applics)
    }
    catch (err) {
        console.log("ERROR", err)
    }
})

// POST
app.post("/api/applics", async (req: Request, res: Response) => {
    try {
        const body = req.body
        const userId = applics.length + 1;
        const newApplic: TApplic = {
            ...body,
            user_id: userId,

        }
        applics = applics.concat(newApplic)
        res.json(newApplic)
    }
    catch (err) {
        res.status(400).json({
            error: 'content missing'
        })
    }
})

// GET :id
app.get("/api/applics/:id", async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const applic = applics.find(app => app.user_id === id)
        return res.json(applic)
    }
    catch (err) {
        console.log("ERROR", err)
    }
})

// PATCH
app.patch('/api/applics/:id', async (req: Request, res: Response) => {
    try {
        const body = req.body
        const updatedApplic: TApplic = {
            ...body,
        }
        applics = applics.map((a) => a.user_id !== updatedApplic.user_id ? a : updatedApplic)
        res.json(updatedApplic)
    }
    catch (err) {
        console.log("ERROR", err)
    }
})

// DELETE
app.delete("/api/applics/:id", async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        applics = applics.filter((a) => a.user_id !== id)
        return res.status(204).end()
    }
    catch (err) {
        console.log("ERROR", err)
    }
})


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});