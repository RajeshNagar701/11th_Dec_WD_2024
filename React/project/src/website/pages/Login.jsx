import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="breadcrumb"><a href="#">Home</a> / Login Us</span>
                            <h3>Login Us</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4">
                            <div className="section-heading text-center">
                                <h6>| Login Us</h6>
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
                            <form id="contact-form" action method="post">
                                <div className="row">
                                    
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label htmlFor="email">Email Address</label>
                                            <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label htmlFor="name">Password</label>
                                            <input type="password" name="password" id="name" placeholder="Your Password..." autoComplete="on" required />
                                        </fieldset>
                                    </div>
                                  
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="orange-button">Login</button>
                                        </fieldset>
                                        
                                    </div>
                                    <div className="col-lg-12">
                                        <Link to="/signup" className='float-end'>If you Not registered then Signup Here</Link>
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

export default Login