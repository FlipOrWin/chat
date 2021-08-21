import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import assistant from './../../png/assistant.jpg'

const Name = ({
    name,
    updateName,
    secName,
    updateSecName,
    lastName,
    updateLastName,
    lastNameM,
    updateLastNameM
}) => {

    return (
        <div className="container mb-12">
            <div className="row col-12">
                <div className="col-xs-3 col-sm-2 col-md-1">
                    <img src={assistant} className="rounded-circle float-lef border-danger" height="60" alt="assist" />
                </div>
                <div className="badge bg-light text-black col-xs-9 col-sm-10 col-md-11">
                    <h1 className='bold'>¿Cual es tu Nombre?</h1>
                    <div class="input-group mb-3">
                        <input 
                            type="text"
                            class="form-control"
                            placeholder="Nombre"
                            value={name}
                            onChange={
                                updateName
                            }
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Segundo Nombre" 
                            value={secName}
                            onChange={
                                updateSecName
                            }
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Apellido Paterno" 
                            value={lastName}
                            onChange={
                                updateLastName
                            }
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <div class="input-group mb-3">
                      <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Apellido Materno" 
                        value={lastNameM}
                        onChange={
                            updateLastNameM
                        }
                        aria-describedby="basic-addon1"
                      />
                    </div>
                </div>
            </div>
            <br/>
        </div>
    );
};

export default Name;
