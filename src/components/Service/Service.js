import React from 'react';
import './Service.css'

const Service = (props) => {
    const{name, img, description}=props.service;
    return (
        <div class="col ">
        <div class="card p-3 img-card">
          <div className=" card-image"><img src={img} class="card-img-top figure-img img-fluid p-3" alt="..."/></div>
          <div class="card-body card-text">
            <h2 class="card-title">{name} </h2>
            <p class="card-text">{description} </p>
            <button className="btn btn-lg btn-outline-info">Details</button>
          </div>
        </div>
      </div>
    );
};

export default Service;