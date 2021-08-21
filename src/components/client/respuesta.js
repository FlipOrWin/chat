import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import man from './../../png/man.png'

const Respuesta = ({
    contact,
    respon,
    phone,
    confirm,
    birth,
    comName
}) => {

    return (
        <div className="container mb-12">
            <br/>
            <div className="row col-12">
                <div className="badge bg-pink text-black col-xs-9 col-sm-10 col-md-11">
                    <br/>
                    
                    { contact === true ?
                        <React.Fragment className='row'>
                        { confirm === true ?
                            <React.Fragment>
                                <h5 className='bold'>{comName}</h5>
                                <h5 className='bold'>{birth}</h5>
                            </React.Fragment>
                            :
                            null
                        }
                            <h5 className='bold'>{respon}</h5>
                            <h5 className='bold'>{phone}</h5>
                        </React.Fragment>
                    :
                        <h5 className='bold'>{respon}</h5>
                    }
                </div>
                <div className="col-xs-3 col-sm-2 col-md-1">
                    <img src={man} className="rounded-circle float-lef border-danger" height="60" alt="assist" />
                </div>
            </div>
            <br/>
        </div>
    );
};

export default Respuesta;
