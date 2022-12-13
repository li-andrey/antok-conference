import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import { TApplic } from '../../types/TApplic';
import CreateApplic from './components/CreateApplic';
import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditIcon from '@mui/icons-material/Edit';
import ApplicItem from './components/ApplicItem';

const applic = {
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
}

const App = () => {
  const [applications, setApplications] = useState<TApplic[]>([])
  const [applicEdit, setApplicEdit] = useState<TApplic>()



  const applicItem = Object.keys(applic)


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/applics")
      setApplications(response.data)
    }

    fetchData()
  }, [applications])

  const handleEditApplic = (id: any) => {
    const app = applications.find(a => a.user_id === id)
    setApplicEdit(app)
  }

  const deleteApplic = async (id: number) => {
    await axios.delete(`http://localhost:8000/api/applics/${id}`)
  }


  return (
    <div className="App">
      <Container maxWidth="lg" sx={{ m: 3, p: 2 }}>
        <Typography variant='h3' gutterBottom>
          Список всех заявок
        </Typography>
        <TableContainer component={Paper} >
          <Table stickyHeader >
            <TableHead  >
              <TableRow>
                <TableCell >
                  Delete
                </TableCell>
                <TableCell >
                  Edit
                </TableCell>
                {applicItem.map(val => (
                  <TableCell key={val} >
                    {val}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {applications.map((el) => (
                <TableRow key={el.user_id}>
                  <TableCell onClick={() => deleteApplic(el.user_id)}>
                    <DeleteForeverRoundedIcon color="success" />
                  </TableCell>
                  <TableCell onClick={() => handleEditApplic(el.user_id)}>
                    <EditIcon color="success" />
                  </TableCell>
                  <TableCell>{el.user_id}</TableCell>
                  <TableCell>{el.fio}</TableCell>
                  <TableCell>{el.fio_eng}</TableCell>
                  <TableCell>{el.birth_date}</TableCell>
                  <TableCell>{el.sex}</TableCell>
                  <TableCell>{el.post_address}</TableCell>
                  <TableCell>{el.email}</TableCell>
                  <TableCell>{el.phones}</TableCell>
                  <TableCell>{el.edu_institute}</TableCell>
                  <TableCell>{el.edu_institute_address}</TableCell>
                  <TableCell>{el.edu_specialization}</TableCell>
                  <TableCell>{el.uch_stepen}</TableCell>
                  <TableCell>{el.work_company}</TableCell>
                  <TableCell>{el.work_start_year}</TableCell>
                  <TableCell>{el.work_department}</TableCell>
                  <TableCell>{el.work_position}</TableCell>
                  <TableCell>{el.work_specialization}</TableCell>
                  <TableCell>{el.public_organizations}</TableCell>
                  <TableCell>{el.antok_city}</TableCell>
                  <TableCell>{el.science_interests}</TableCell>
                  <TableCell>{el.conf_topic}</TableCell>
                  <TableCell>{el.conf_section}</TableCell>
                  <TableCell>{el.conf_coauthors}</TableCell>
                  <TableCell>{el.participation_type}</TableCell>
                  <TableCell>{el.created_at}</TableCell>
                  <TableCell>{el.updated_at}</TableCell>
                  <TableCell>{el.need_compensation}</TableCell>
                  <TableCell>{el.inn}</TableCell>
                  <TableCell>{el.snils}</TableCell>
                  <TableCell>{el.registration}</TableCell>
                  <TableCell>{el.phone_work}</TableCell>
                  <TableCell>{el.phone_home}</TableCell>
                  <TableCell>{el.uch_zvanie}</TableCell>
                  <TableCell>{el.work_city}</TableCell>
                  <TableCell>{el.work_country}</TableCell>
                  <TableCell>{el.acad_position}</TableCell>
                  <TableCell>{el.work_company_short}</TableCell>
                  <TableCell>{el.need_hotel}</TableCell>
                  <TableCell>{el.birth_year}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <CreateApplic />

        {/* <TextField
          autoFocus
          label={"ФИО"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, fio: e.target.value })}
          value={applicEdit?.fio} />
        <TextField
          label={"ФИО на английском"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, fio_eng: e.target.value })}
          value={applicEdit?.fio_eng} />
        <TextField
          label={"День Рождения"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, birth_date: e.target.value })}
          value={applicEdit?.birth_date} />
        <TextField
          label={"Пол"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, sex: e.target.value })}
          value={applicEdit?.sex} />
        <TextField
          label={"Адресс"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, post_address: e.target.value })}
          value={applicEdit?.post_address} />
        <TextField
          label={"Email"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, email: e.target.value })}
          value={applicEdit?.email} />
        <TextField
          label={"Телефон"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, phones: e.target.value })}
          value={applicEdit?.phones} />
        <TextField
          label={"Университет"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, edu_institute: e.target.value })}
          value={applicEdit?.edu_institute} />
        <TextField
          label={"Адрес университета"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, edu_institute_address: e.target.value })}
          value={applicEdit?.edu_institute_address} />
        <TextField
          label={"Специализация в университете"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, edu_specialization: e.target.value })}
          value={applicEdit?.edu_specialization} />
        <TextField
          label={"Ученая степень"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, uch_stepen: e.target.value })}
          value={applicEdit?.uch_stepen} />
        <TextField
          label={"Место работы"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, work_company: e.target.value })}
          value={applicEdit?.work_company} />
        <TextField
          label={"Год начало работы"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, work_start_year: Number(e.target.value) })}
          value={applicEdit?.work_start_year} />
        <TextField
          label={"Отдел"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, work_department: e.target.value })}
          value={applicEdit?.work_department} />
        <TextField
          label={"Рабочая позиция"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, work_position: e.target.value })}
          value={applicEdit?.work_position} />
        <TextField
          label={"Рабочая специализация"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, work_specialization: e.target.value })}
          value={applicEdit?.work_specialization} />
        <TextField
          label={"Публичная организация"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, public_organizations: e.target.value })}
          value={applicEdit?.public_organizations} />
        <TextField
          label={"АНТОК city"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, antok_city: e.target.value })}
          value={applicEdit?.antok_city} />
        <TextField
          label={"Научные интересы"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, science_interests: e.target.value })}
          value={applicEdit?.science_interests} />
        <TextField
          label={"Тема конференции"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, conf_topic: e.target.value })}
          value={applicEdit?.conf_topic} />
        <TextField
          label={"Секция конференции"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, conf_section: e.target.value })}
          value={applicEdit?.conf_section} />
        <TextField
          label={"Соавторы конференции"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, conf_coauthors: e.target.value })}
          value={applicEdit?.conf_coauthors} />
        <TextField
          label={"Тип участия"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, participation_type: e.target.value })}
          value={applicEdit?.participation_type} />
        <TextField
          label={"Создана"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, created_at: e.target.value })}
          value={applicEdit?.created_at} />
        <TextField
          label={"Обновлена"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, updated_at: e.target.value })}
          value={applicEdit?.updated_at} />
        <TextField
          label={"Нужна компенсация"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, need_compensation: Boolean(e.target.value) })}
          value={applicEdit?.need_compensation} />
        <TextField
          label={"ИНН"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, inn: e.target.value })}
          value={applicEdit?.inn} />
        <TextField
          label={"СНИЛС"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, snils: e.target.value })}
          value={applicEdit?.snils} />
        <TextField
          label={"Регистрация"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, registration: e.target.value })}
          value={applicEdit?.registration} />
        <TextField
          label={"Рабочий телефон"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, phone_work: e.target.value })}
          value={applicEdit?.phone_work} />
        <TextField
          label={"Домашний телефон"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, phone_home: e.target.value })}
          value={applicEdit?.phone_home} />
        <TextField
          label={"Ученое звание"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, uch_zvanie: e.target.value })}
          value={applicEdit?.uch_zvanie} />
        <TextField
          label={"Город работы"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, work_city: e.target.value })}
          value={applicEdit?.work_city} />
        <TextField
          label={"Страна работы"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, work_country: e.target.value })}
          value={applicEdit?.work_country} />
        <TextField
          label={"ACAD позиция"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, acad_position: e.target.value })}
          value={applicEdit?.acad_position} />
        <TextField
          label={"Место работы сокращенно"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, work_company_short: e.target.value })}
          value={applicEdit?.work_company_short} />
        <TextField
          label={"Нужен отель"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, need_hotel: e.target.value })}
          value={applicEdit?.need_hotel} />
        <TextField
          label={"Год рождения"}
          required
          variant="standard"
          fullWidth
          margin='normal'
          onChange={(e) => setApplicEdit({ ...applicEdit, birth_year: Number(e.target.value) })}
          value={applicEdit?.birth_year} /> */}


      </Container>
    </div >
  );
}

export default App;
