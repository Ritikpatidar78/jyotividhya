import React from 'react'
import logo from '../assets/schoolmono.jpeg'

const Navbar = () => {
    return (
        <>
            <div>
                <nav class="navbar sticky-top slogo ">
                    <div class="container-fluid d-flex justify-content-center ">
                        <a class="sname navbar-brand d-flex align-items-center" href="#">
                            <img src={logo} alt="Logo" width="25" height="24" class="mono d-inline-block align-text-top" />
                            JYOTI VIDHYA PEETH HIGH SCHOOL
                        </a>
                    </div>
                </nav>
            </div>
            <nav class="navbar navbar-expand-lg bg-white navbar-light px-4 px-lg-5 py-lg-0">

                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" >
                    <div class="navbar-nav mx-auto">
                        <a href="index.html" class="nav-item nav-link ">Home</a>
                        <a href="about.html" class="nav-item nav-link">About Us</a>
                        <a href="classes.html" class="nav-item nav-link">Classes</a>
                        <a href="contact.html" class="nav-item nav-link">Contact Us</a>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar