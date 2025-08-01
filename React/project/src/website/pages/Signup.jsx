import axios from 'axios';
import React, { useState } from 'react'
import { Link } from "react-router-dom";
function Signup() {

    const [formdata, setFormdata] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        mobile: "",
        status: ""
    })

    const changeHandel = (e) => {
        setFormdata({ ...formdata, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
        console.log(formdata);
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:3000/user`, formdata);
        console.log(res);
        setFormdata({ ...formdata, name: "", email: "", mobile: "", password: "" });
    }


    return (
        <div>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="breadcrumb"><a href="#">Home</a> / Signup Us</span>
                            <h3>Signup Us</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4">
                            <div className="section-heading text-center">
                                <h6>| Signup Us</h6>
                                <h2>Get In Touch With Our Agents</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-content">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 offset-lg-2">
                            <form id="contact-form" action method="post" onSubmit={submitHandel}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label htmlFor="name">Full Name</label>
                                            <input type="name" onChange={changeHandel} value={formdata.name} name="name" id="name" placeholder="Your Name..." autoComplete="on" required />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label htmlFor="email">Email Address</label>
                                            <input type="text" onChange={changeHandel} value={formdata.email} name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label htmlFor="email">Password</label>
                                            <input type="password" onChange={changeHandel} value={formdata.password} name="password" id="password" placeholder="Your Password..." required />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label htmlFor="subject">Mobile</label>
                                            <input type="number" onChange={changeHandel} value={formdata.mobile} name="mobile" id="mobile" placeholder="Mobile..." autoComplete="on" />
                                        </fieldset>
                                    </div>

                                    <div className="col-lg-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="orange-button">Signup</button>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <Link className='float-end' to="/login">If you already registere then Login here</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup