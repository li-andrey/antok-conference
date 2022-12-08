"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const uuid_1 = require("uuid");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
let applics = [
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
];
// GET 
app.get("/api/applics", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.json(applics);
    }
    catch (err) {
        console.log("ERROR", err);
    }
}));
// POST
app.post("/api/applics", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const userId = Number((0, uuid_1.v4)());
        const newApplic = Object.assign({ user_id: userId }, body);
        applics = applics.concat(newApplic);
        res.json(newApplic);
    }
    catch (err) {
        res.status(400).json({
            error: 'content missing'
        });
    }
}));
// GET :id
app.get("/api/applics/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const applic = applics.find(app => app.user_id === id);
        return res.json(applic);
    }
    catch (err) {
        console.log("ERROR", err);
    }
}));
// PATCH неправильно
app.patch('/api/applics/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const body = req.body;
        const updatedApplic = Object.assign({ user_id: id }, body);
        applics = applics.map((a) => a.user_id !== updatedApplic.user_id ? a : updatedApplic);
        res.json(updatedApplic);
    }
    catch (err) {
        console.log("ERROR", err);
    }
}));
// DELETE
app.delete("/api/applics/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        applics = applics.filter((a) => a.user_id !== id);
        return res.status(204).end();
    }
    catch (err) {
        console.log("ERROR", err);
    }
}));
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
