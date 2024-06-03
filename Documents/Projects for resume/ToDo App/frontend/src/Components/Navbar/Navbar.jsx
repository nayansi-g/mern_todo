import React from 'react'
import './Navbar.css'

import { GiWhiteBook } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div><nav className="navbar navbar-expand-lg">
            <div className="container">

                <Link to='/' className="navbar-brand" ><b><GiWhiteBook /> &nbsp; todo</b></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2 ">
                            <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to='/about' className="nav-link active" aria-current="page" >About Us</Link>
                        </li>
                        <li className="nav-item mx-2 ">
                            <Link to='/todo' className="nav-link active" aria-current="page" >Todo</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to='/signup' className="nav-link active btn-nav" aria-current="page" >SignUp</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to='signin' className="nav-link active btn-nav" aria-current="page" >SignIn</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to='#' className="nav-link active btn-nav" aria-current="page" >Log Out</Link>
                        </li>





                    </ul>

                </div>
            </div>
        </nav></div>
    )
}

export default Navbar;