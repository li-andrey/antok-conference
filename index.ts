import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

type ApplicsType = {
    "user_id": number,
    "fio": string,
    "fio_eng": string,
    "birth_date": string,
    "sex": string,
    "post_address": string,
    "email": string,
    "phones": string,
    "edu_institute": string,
    "edu_institute_address": string,
    "edu_specialization": string,
    "uch_stepen": string,
    "work_company": string,
    "work_start_year": number,
    "work_department": string,
    "work_position": string,
    "work_specialization": string,
    "public_organizations": string,
    "antok_city": string,
    "science_interests": string,
    "conf_topic": string,
    "conf_section": string,
    "conf_coauthors": string,
    "participation_type": string,
    "created_at": string,
    "updated_at": string,
    "need_compensation": boolean,
    "inn": string,
    "snils": string,
    "registration": string,
    "phone_work": string,
    "phone_home": string,
    "uch_zvanie": string,
    "work_city": string,
    "work_country": string,
    "acad_position": string,
    "work_company_short": string,
    "need_hotel": string,
    "birth_year": 2000
}

let applics: ApplicsType[] = [
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
        const userId = Number(uuidv4());
        const newApplic: ApplicsType = {
            user_id: userId,                   /* перезаписывание id можно предотвратить только прописав все поля? */
            ...body,
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

// PATCH неправильно
app.patch('/api/applics/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const body = req.body

        const updatedApplic: ApplicsType = {
            user_id: id,
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