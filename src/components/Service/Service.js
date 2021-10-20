import React from 'react';
import './Service.css'

const Service = (props) => {
    const{name, img, description}=props.service;
    return (
        <div className="col ">
        <div className="card p-3 img-card">
          <div className=" card-image"><img src={img} className="card-img-top figure-img img-fluid p-3" alt="..."/></div>
          <div className="card-body card-text">
            <h2 className="card-title">{name} </h2>
            <p className="card-text">{description} </p>
            <button className="btn btn-lg btn-outline-info">Details</button>
          </div>
        </div>
      </div>
    );
};

export default Service;