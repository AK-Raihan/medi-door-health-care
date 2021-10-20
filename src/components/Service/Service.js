import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const{code,name, img, description}=props.service;
    return (
        <div className="col ">
        <div className="card p-3 img-card">
          <div className=" card-image"><img src={img} className="card-img-top figure-img img-fluid " alt="..."/></div>
          <div className="card-body card-text">
            <h2 className="card-title">{name} </h2>
            <p className="card-text">{description} </p>
            <Link to={`/depertment/${code} `}>
            <button className="btn btn-lg btn-outline-info">Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Service;