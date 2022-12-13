import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { Box, TextField, Typography } from '@mui/material';
import { TApplic } from '../../../types/TApplic';
import axios from 'axios';


const CreateApplic: React.FC = () => {
    const [applic, setApplic] = useState<TApplic>({
        user_id: 0,
        fio: '',
        fio_eng: '',
        birth_date: '',
        sex: '',
        post_address: '',
        email: '',
        phones: '',
        edu_institute: '',
        edu_institute_address: '',
        edu_specialization: '',
        uch_stepen: '',
        work_company: '',
        work_start_year: 0,
        work_department: '',
        work_position: '',
        work_specialization: '',
        public_organizations: '',
        antok_city: '',
        science_interests: '',
        conf_topic: '',
        conf_section: '',
        conf_coauthors: '',
        participation_type: '',
        created_at: '',
        updated_at: '',
        need_compensation: false,
        inn: '',
        snils: '',
        registration: '',
        phone_work: '',
        phone_home: '',
        uch_zvanie: '',
        work_city: '',
        work_country: '',
        acad_position: '',
        work_company_short: '',
        need_hotel: '',
        birth_year: 0
    })

    const postApplic = async () => {
        await axios.post("http://localhost:8000/api/applics", applic)

    }

    const handleForm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        postApplic()
        setApplic({
            user_id: 0,
            fio: '',
            fio_eng: '',
            birth_date: '',
            sex: '',
            post_address: '',
            email: '',
            phones: '',
            edu_institute: '',
            edu_institute_address: '',
            edu_specialization: '',
            uch_stepen: '',
            work_company: '',
            work_start_year: 0,
            work_department: '',
            work_position: '',
            work_specialization: '',
            public_organizations: '',
            antok_city: '',
            science_interests: '',
            conf_topic: '',
            conf_section: '',
            conf_coauthors: '',
            participation_type: '',
            created_at: '',
            updated_at: '',
            need_compensation: false,
            inn: '',
            snils: '',
            registration: '',
            phone_work: '',
            phone_home: '',
            uch_zvanie: '',
            work_city: '',
            work_country: '',
            acad_position: '',
            work_company_short: '',
            need_hotel: '',
            birth_year: 0
        })
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 600, m: 5, p: 5 }}>
                <Typography variant='h5'>Создание заявки</Typography>
                <TextField
                    autoFocus
                    label={"ФИО"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, fio: e.target.value })}
                    value={applic.fio} />
                <TextField
                    label={"ФИО на английском"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, fio_eng: e.target.value })}
                    value={applic.fio_eng} />
                <TextField
                    label={"День Рождения"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, birth_date: e.target.value })}
                    value={applic.birth_date} />
                <TextField
                    label={"Пол"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, sex: e.target.value })}
                    value={applic.sex} />
                <TextField
                    label={"Адресс"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, post_address: e.target.value })}
                    value={applic.post_address} />
                <TextField
                    label={"Email"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, email: e.target.value })}
                    value={applic.email} />
                <TextField
                    label={"Телефон"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, phones: e.target.value })}
                    value={applic.phones} />
                <TextField
                    label={"Университет"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, edu_institute: e.target.value })}
                    value={applic.edu_institute} />
                <TextField
                    label={"Адрес университета"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, edu_institute_address: e.target.value })}
                    value={applic.edu_institute_address} />
                <TextField
                    label={"Специализация в университете"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, edu_specialization: e.target.value })}
                    value={applic.edu_specialization} />
                <TextField
                    label={"Ученая степень"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, uch_stepen: e.target.value })}
                    value={applic.uch_stepen} />
                <TextField
                    label={"Место работы"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, work_company: e.target.value })}
                    value={applic.work_company} />
                <TextField
                    label={"Год начало работы"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, work_start_year: Number(e.target.value) })}
                    value={applic.work_start_year} />
                <TextField
                    label={"Отдел"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, work_department: e.target.value })}
                    value={applic.work_department} />
                <TextField
                    label={"Рабочая позиция"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, work_position: e.target.value })}
                    value={applic.work_position} />
                <TextField
                    label={"Рабочая специализация"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, work_specialization: e.target.value })}
                    value={applic.work_specialization} />
                <TextField
                    label={"Публичная организация"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, public_organizations: e.target.value })}
                    value={applic.public_organizations} />
                <TextField
                    label={"АНТОК city"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, antok_city: e.target.value })}
                    value={applic.antok_city} />
                <TextField
                    label={"Научные интересы"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, science_interests: e.target.value })}
                    value={applic.science_interests} />
                <TextField
                    label={"Тема конференции"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, conf_topic: e.target.value })}
                    value={applic.conf_topic} />
                <TextField
                    label={"Секция конференции"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, conf_section: e.target.value })}
                    value={applic.conf_section} />
                <TextField
                    label={"Соавторы конференции"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, conf_coauthors: e.target.value })}
                    value={applic.conf_coauthors} />
                <TextField
                    label={"Тип участия"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, participation_type: e.target.value })}
                    value={applic.participation_type} />
                <TextField
                    label={"Создана"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, created_at: e.target.value })}
                    value={applic.created_at} />
                <TextField
                    label={"Обновлена"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, updated_at: e.target.value })}
                    value={applic.updated_at} />
                <TextField
                    label={"Нужна компенсация"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, need_compensation: Boolean(e.target.value) })}
                    value={applic.need_compensation} />
                <TextField
                    label={"ИНН"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, inn: e.target.value })}
                    value={applic.inn} />
                <TextField
                    label={"СНИЛС"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, snils: e.target.value })}
                    value={applic.snils} />
                <TextField
                    label={"Регистрация"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, registration: e.target.value })}
                    value={applic.registration} />
                <TextField
                    label={"Рабочий телефон"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, phone_work: e.target.value })}
                    value={applic.phone_work} />
                <TextField
                    label={"Домашний телефон"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, phone_home: e.target.value })}
                    value={applic.phone_home} />
                <TextField
                    label={"Ученое звание"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, uch_zvanie: e.target.value })}
                    value={applic.uch_zvanie} />
                <TextField
                    label={"Город работы"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, work_city: e.target.value })}
                    value={applic.work_city} />
                <TextField
                    label={"Страна работы"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, work_country: e.target.value })}
                    value={applic.work_country} />
                <TextField
                    label={"ACAD позиция"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, acad_position: e.target.value })}
                    value={applic.acad_position} />
                <TextField
                    label={"Место работы сокращенно"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, work_company_short: e.target.value })}
                    value={applic.work_company_short} />
                <TextField
                    label={"Нужен отель"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, need_hotel: e.target.value })}
                    value={applic.need_hotel} />
                <TextField
                    label={"Год рождения"}
                    required
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={(e) => setApplic({ ...applic, birth_year: Number(e.target.value) })}
                    value={applic.birth_year} />
                <Button variant="contained" onClick={handleForm}>Создать</Button>
            </Card>
        </Box>


    )
}

export default CreateApplic 