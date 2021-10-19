import React from 'react';
import './About.css'
import img from '../../images/about.jpg'
import doc1 from '../../images/1.jpg'
import doc2 from '../../images/2.jpg'
import doc3 from '../../images/3.jpg'
import doc4 from '../../images/4.jpg'

const About = () => {
    return (
        <div>
            <div className="about-title">
                <h1>About Us</h1>
            </div>

            <div className="container">
                <div className="row p-5">
                    <div className="col-lg-6">
                        <img src={img} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div className="about-text text-start">
                            <p>About us</p>
                            <h1>Our Qualified Doctor Are Here To Help Your Health</h1>
                            <p>The Deenanath Mangeshkar Hospital is beautifully designed, having a central atrium with four wings built around it. It is a 800-bed hospital with 12 operation theaters, a sophisticatle in Pune. We are attention is given to the needs of th</p>
                        </div>
                    </div>
                </div>
                

            </div>

            <div className="our-doctor py-5 ">
                    <h1 className="mb-5">Our Doctor</h1>
                    <div className="doc-data d-flex justify-content-around ">
                    <div className="div1">
                    <img src={doc1} alt="" />
                    <h5>David James</h5>
                    <p>Consultant</p>
                    </div>
                    <div className="div2">
                    <img src={doc2} alt="" />
                    <h5>Sarah Albert</h5>
                    <p>Consultant</p>
                    </div>
                    <div className="div3">
                    <img src={doc3} alt="" />
                    <h5>Kevin Martin</h5>
                    <p>Consultant</p>
                    </div>
                    <div className="div4">
                    <img src={doc3} alt="" />
                    <h5>Jessica Eve</h5>
                    <p>Consultant</p>
                    </div>
                    </div>
                </div>

        </div>
    );
};

export default About;