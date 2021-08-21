import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import assistant from './../../png/assistant.jpg'

const Nacimiento = ({
    day,
    updateDay,
    month,
    updateMonth,
    year,
    updateYear
}) => {

    return (
        <div className="container mb-12">
            <div className="row col-12">
                <div className="col-xs-3 col-sm-2 col-md-1">
                    <img src={assistant} className="rounded-circle float-lef border-danger" height="60" alt="assist" />
                </div>
                <div className="badge bg-light text-black col-xs-9 col-sm-10 col-md-11">
                    <h1 className='bold'>¿Cual es tu fecha de nacimiento?</h1>
                    <div class="input-group mb-3">
                        <input 
                            type="number"
                            class="form-control"
                            placeholder="Dia"
                            value={day}
                            onChange={
                                updateDay
                            }
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Mes" 
                            value={month}
                            onChange={
                                updateMonth
                            }
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <input 
                            type="number" 
                            class="form-control" 
                            placeholder="Año" 
                            value={year}
                            onChange={
                                updateYear
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

export default Nacimiento;
