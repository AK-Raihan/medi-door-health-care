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
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active head-content" style={{height:'850px'}}>
                        <div className="header-img">
                        <img src={banner1} class="d-block w-100" alt="..."/>
                        </div>
                        <div className="header-text">
                            <h5 className="fs-bold">Welcome to MediDoor</h5>
                            <h1>PROVIDING BEST <br /> <span className="text-info">MEDICAL</span> CARE</h1>
                        </div>
                    </div>
                    <div class="carousel-item" style={{height:'850px'}}>
                    <div className="header-img">
                        <img src={banner2} class="d-block w-100" alt="..."/>
                        </div>
                        <div className="header-text">
                        <h5 className="fs-bold">Trusted & Reliable</h5>
                        <h1>Better <span className="text-info">Healthcare</span> <br /> for the World</h1>
                        </div>
                    </div>
                    <div class="carousel-item" style={{height:'850px'}}>
                       <div className="header-img">
                        <img src={banner3} class="d-block w-100" alt="..."/>
                        </div>
                        <div className="header-text">
                        <h5 className="fs-bold">Download and register <br /> on our app for free and feel safe for all your family</h5>
                        <h1>Instant <span className="text-info">video consultation</span> <br /> from the best Doctors</h1>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
                </div>
            </div>
        </main>
    );
};

export default Banner;