import React from 'react';
import img from '../../images/750-545-1.png'

const FindDoctor = () => {
    return (
        <div style={{ 
            backgroundImage: `url("https://i.ibb.co/H2SmJFt/1920-650-2.jpg")` 
          }}>


        <div>
            <div className="container">
                <div className="row p-5">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="mt-5">
                            <h2 className="text-info fs-1">Find a Doctor</h2>
                            <h6 className="my-3">Culpa qui officia deserunt mollit anim idest</h6>
                            <p className="fs-5">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div className="input-group mt-5">
                                <input type="text" className="form-control p-3" placeholder="found a doctor" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default FindDoctor;