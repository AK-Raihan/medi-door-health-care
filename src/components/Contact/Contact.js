import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="row">
                
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <div className="row mt-5">
                    <h2>Here Contact with us</h2>
                        <div className="col-lg-6 mt-2">
                            <div className="contact-address w-75 mt-5 p-5">
                                <h1>Get in Touch</h1>
                            <ul className="text-start list-unstyled">
                                <li className="text-info"><i class="fas fa-map-marker-alt fs-2 "></i> MMCH gate oposite position,22</li>
                                <li className="text-info"><i class="fas fa-phone-volume fs-2 my-5"></i> +24 123-456-7878</li>
                                <li className="text-info"><i class="far fa-envelope fs-2" ></i> info@example.com</li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-form p-5 text-start">
                                <form action="/">
                                <h1>Contact Form</h1>
                                <p>Drop your feedback & suggestions</p>
                                <input className="form-control" type="text"  placeholder="name"/>
                                <input className="form-control" type="email" placeholder="email" />
                                <textarea placeholder="please enter your message" className="mt-5" cols="70" rows="5"></textarea>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </div>

        </div>
    );
};

export default Contact;