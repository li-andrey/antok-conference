import axios from 'axios';
import React from 'react';
import './App.css';

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

function App() {
  const [applications, setApplications] = React.useState<ApplicsType[]>([])
  const [open, setOpen] = React.useState(false)
  const applicItem = Object.keys(applic)

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8000/api/applics")
    setApplications(response.data)
  }
  const getApplics = () => {
    fetchData()
    setOpen(!open)
  }


  return (
    <div className="App">
      <button onClick={getApplics}>Получить заявки</button>
      {open &&
        <div className='table__element'>
          <table width="100%">
            <tbody>
              <tr>
                {applicItem.map(val => (
                  <th>{val}</th>
                ))}
              </tr>

              {applications.map((el) => (
                <tr key={el.user_id}>
                  <td>
                    <div >
                      {el.user_id}
                    </div>
                  </td>
                  <td>
                    <div >
                      {el.fio}
                    </div>
                  </td>
                  <td>
                    <div >{el.fio_eng}</div>
                  </td>
                  <td>
                    <div >{el.birth_date}</div>
                  </td>
                  <td>
                    <div >
                      {el.sex}
                    </div>
                  </td>
                  <td>
                    <div >
                      {el.post_address}
                    </div>
                  </td>
                  <td>
                    <div >
                      {el.email}
                    </div>
                  </td>
                  <td>
                    <div >
                      {el.phones}
                    </div>
                  </td>
                  <td>
                    <div >
                      {el.edu_institute}
                    </div>
                  </td>
                  <td>
                    <div >
                      {el.edu_institute_address}
                    </div>
                  </td>
                  <td>
                    <div >
                      {el.edu_specialization}
                    </div>
                  </td>
                  <td>
                    <div >
                      {el.uch_stepen}
                    </div>
                  </td>
                  <td>
                    <div >
                      {el.work_company}
                    </div>
                  </td>
                  <td>
                    <div >
                      {el.work_start_year}
                    </div>
                  </td>
                  <td>
                    <div >
                      {el.work_department}
                    </div>
                  </td>
                  <td>
                    <div >
                      {el.work_position}
                    </div>
                  </td>
                  <td>
                    <div >
                      {el.work_specialization}
                    </div>
                  </td>
                  <td><div >{el.public_organizations}</div></td>
                  <td><div>{el.antok_city}</div></td>
                  <td><div>{el.science_interests}</div></td>
                  <td><div>{el.conf_topic}</div></td>
                  <td><div>{el.conf_section}</div></td>
                  <td><div>{el.conf_coauthors}</div></td>
                  <td><div>{el.participation_type}</div></td>
                  <td><div>{el.created_at}</div></td>
                  <td><div>{el.updated_at}</div></td>
                  <td><div>{el.need_compensation}</div></td>
                  <td><div>{el.inn}</div></td>
                  <td><div>{el.snils}</div></td>
                  <td><div>{el.registration}</div></td>
                  <td><div>{el.phone_work}</div></td>
                  <td><div>{el.phone_home}</div></td>
                  <td><div>{el.uch_zvanie}</div></td>
                  <td><div>{el.work_city}</div></td>
                  <td><div>{el.work_country}</div></td>
                  <td><div>{el.acad_position}</div></td>
                  <td><div>{el.work_company_short}</div></td>
                  <td><div>{el.need_hotel}</div></td>
                  <td><div>{el.birth_year}</div></td>
                </tr>
              )
              )}
            </tbody>
          </table>
        </div>
      }

    </div>
  );
}

export default App;
