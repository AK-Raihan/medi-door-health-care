import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import img from '../../images/payment-gateway.jpg'

const Footer = () => {
    return (
        <div className="footer text-white ">
            <div className="container">
            <div className="row">
                <div className="col-lg-4 text-start">
                    <div>
                    <div>
                    <a className="navbar-brand fs-2 fw-bold text-primary" href="/"> <span><i class="fas fa-hand-holding-medical fs-1 text-info"></i></span> MediDoor</a>
                    </div>
                    <p className="text-white">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    <hr />
                    </div>
                    <div>
                        <h5>Reach Out</h5>
                        <ul className="text-start list-unstyled">
                        <li className="text-white"><i class="fas fa-map-marker-alt "></i> MMCH gate oposite position,22</li>
                        <li className="text-white"><i class="fas fa-phone-volume"></i> +24 123-456-7878</li>
                        <li className="text-white"><i class="far fa-envelope"></i> info@example.com</li>
                        </ul>
                    </div>


                </div>
                <div className="col-lg-4 text-start">
                    <div>
                    <h5>Useful Link</h5>
                    <li> <Link> Book Appoitment</Link></li>
                    <li> <Link>View Departments</Link></li>
                    <li> <Link>Our Locations</Link></li>
                    <li> <Link>Doctors On Panel</Link></li>
                    <li> <Link>Facilities Available</Link></li>
                    <li> <Link>About Hospital</Link></li>
                    <li> <Link>Hospital Rules</Link></li>
                    </div>

                    <h5>Social contact</h5>
                    <div className="social-menu d-flex list-unstyled">
                        
                        <li><i class="fab fa-facebook-square"></i></li>
                        <li><i class="fab fa-twitter-square"></i></li>
                        <li><i class="fab fa-instagram-square"></i></li>
                        <li><i class="fab fa-linkedin"></i></li>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div>
                        <h5>Subscribe Newsletter</h5>
                        <p>Subscribe to our newsletter for daily health tips</p>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                        </div>
                    </div>
                    <div>
                        <h5>Payment Accepted</h5>
                        <span><img className="w-75" src={img} alt="" /></span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;