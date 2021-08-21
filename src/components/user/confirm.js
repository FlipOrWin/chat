import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import assistant from './../../png/assistant.jpg'

const Confirm = () => {
    return (
        <div className="container mb-12">
            <div className="row col-12">
                <div className="col-xs-3 col-sm-2 col-md-1">
                    <img src={assistant} className="rounded-circle float-lef border-danger" height="60" alt="assist" />
                </div>
                <div className="badge bg-light text-black col-xs-9 col-sm-10 col-md-11">
                    <br/>
                    <h6 className='bold'>Si tus datos son correctos por favor continuemos</h6>
                </div>
            </div>
            <br/>
        </div>
    );
};

export default Confirm;
