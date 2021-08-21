//import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = props => {

    return (
        <nav className="flex flex-wrap bg-pink px-4 py-5 fixed top-0 w-full z-50">
            <div className="  col-md-6">
                <h1 class="text-left">"Titulo de Formulario"</h1>
                <br/>
                <h6>En menos de 5 minutos</h6>
            </div>
            <div className="badge text-black block automr-12 col-6">
            </div>
        </nav>
    );
};

export default Navbar;
