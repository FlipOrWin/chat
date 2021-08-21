// import logo from './logo.svg';
import './App.css';
import Title from './components/title-bar/title-bar'
import Name from './components/user/name'
import Birth from './components/user/birth'
import Contact from './components/user/contact'
import Confirm from './components/user/confirm'
import Respuesta from './components/client/respuesta'
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  
  
  const [name, setName] = useState('')
  const [secName, setSecName] = useState('')
  const [lastName, setLastName] = useState('')
  const [lastNameM, setLastNameM] = useState('')
  
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [finish, setFinish] = useState(false)
  const [check, setCheck] = useState(false)

  if(check===false){
    if(sessionStorage.getItem("name")!==undefined && sessionStorage.getItem("name")!==null){
      setName(sessionStorage.getItem("name"))
      setSecName(sessionStorage.getItem("secName"))
      setLastName(sessionStorage.getItem("lastName"))
      setLastNameM(sessionStorage.getItem("lastNameM"))

      setDay(sessionStorage.getItem("day"))
      setMonth(sessionStorage.getItem("month"))
      setYear(sessionStorage.getItem("year"))

      setEmail(sessionStorage.getItem("correo"))
      setPhone(sessionStorage.getItem("telefono"))

    }
    setCheck(true)
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFinish(true)
    console.log('You clicked submit.');
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("secName", secName);
    sessionStorage.setItem("lastName", lastName);
    sessionStorage.setItem("lastNameM", lastNameM);
    sessionStorage.setItem("day", day);    
    sessionStorage.setItem("month", month);
    sessionStorage.setItem("year", year);
    sessionStorage.setItem("correo", email);
    sessionStorage.setItem("telefono", phone);
  }

  return (
    <div className="App">
      <Title/>
      <br/>
      <div className="container col-12">
        <div className='row'>
          <Name 
            name={name} 
            updateName={
              (e) => {
                setName(e.target.value)
              }
            }
            secName={secName} 
            updateSecName={
              (e) => {
                setSecName(e.target.value)
              }
            }
            lastName={lastName}
            updateLastName={
              (e) => {
                setLastName(e.target.value)
              }
            }
            lastNameM={lastNameM}
            updateLastNameM={
              (e) => {
                setLastNameM(e.target.value)
              }
            }
          />
          { !(name === '' || secName === '' || lastName === '' || lastNameM === '') ? 
            <React.Fragment className='row'>
              <Respuesta
                respon={name+' '+secName+' '+lastName+' '+lastNameM}
              />
              <Birth
                day={day} 
                updateDay={
                  (e) => {
                    setDay(e.target.value)
                  }
                }
                month={month} 
                updateMonth={
                  (e) => {
                    setMonth(e.target.value)
                  }
                }
                year={year}
                updateYear={
                  (e) => {
                    setYear(e.target.value)
                  }
                }
              />

            { !(day === '' || month === '' || year === '') ?
              <React.Fragment className='row'>
                <Respuesta
                  contact={false}
                  respon={day+' '+month+' '+year}
                />
                <Contact
                  email={email} 
                  updateEmail={
                    (e) => {
                      setEmail(e.target.value)
                    }
                  }
                  phone={phone} 
                  updatePhone={
                    (e) => {
                      setPhone(e.target.value)
                    }
                  }
                />
                { !(email === '' || phone === '') ?
                  <React.Fragment className='row'>
                    <Respuesta
                      contact={true}
                      respon={'Correo electrónico: '+email}
                      phone={'Teléfono celular: '+phone}
                    />
                    <Confirm/>
                    <button 
                      type="button" 
                      class="btn btn-danger"
                      onClick={handleSubmit}
                    >
                      Iniciar
                    </button>
                    { finish === true ?
                      <React.Fragment className='row'>
                        <Respuesta
                          contact={true}
                          confirm={true}
                          comName={'Nombre: '+name+' '+secName+' '+lastName+' '+lastNameM}
                          birth={'Fecha de nacimiento: '+day+' '+month+' '+year}
                          respon={'Correo electrónico: '+email}
                          phone={'Teléfono celular: '+phone}
                        />
                      </React.Fragment>
                    :
                      <br/>
                    }
                  </React.Fragment>
                :
                  <br/>
                }
              </React.Fragment>
            :
              <br/>
            }
            </React.Fragment>
          :
            <br/>
          }
        </div>
        
      </div>
    </div>
  );
}

export default App;
