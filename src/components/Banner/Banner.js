import React from 'react';
import banner1 from '../../images/bg1.jpg'
import banner2 from '../../images/bg2.jpg'
import banner3 from '../../images/bg3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <main >
            <div className="row">
                <div className="col">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active head-content banner-carousel " >
                        <div className="header-img">
                        <img src={banner1} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="header-text">
                            <h5 className="fs-bold">Welcome to MediDoor</h5>
                            <h2>PROVIDING BEST <br /> <span className="text-info">MEDICAL</span> CARE</h2>
                            <button className="btn btn-outline-info mt-3">Book your seasson</button>
                        </div>
                    </div>
                    <div className="carousel-item banner-carousel" >
                    <div className="header-img">
                        <img src={banner2} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="header-text">
                        <h5 className="fs-bold">Trusted & Reliable</h5>
                        <h2>Better <span className="text-info">Healthcare</span> <br /> for the World</h2>
                        <button className="btn btn-outline-info mt-3">Book your seasson</button>
                        </div>
                    </div>
                    <div className="carousel-item banner-carousel" >
                       <div className="header-img">
                        <img src={banner3} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="header-text">
                        <h5 className="fs-bold">Download and register <br /> on our app for free and feel safe for all your family</h5>
                        <h2>Instant <span className="text-info">video consultation</span> <br /> from the best Doctors</h2>
                        <button className="btn btn-outline-info mt-3">Book your seasson</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
                </div>
            </div>
        </main>
    );
};

export default Banner;