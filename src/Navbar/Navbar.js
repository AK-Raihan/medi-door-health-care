import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Navbar = () => {
    const{user, logOut}=useAuth()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand fs-2 fw-bold text-primary" href="/"> <span><i className="fas fa-hand-holding-medical fs-1 text-info"></i></span> MediDoor</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                    <li className="nav-item">
                <Link className="nav-link" to="/service">Service</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/depertment">Depertment</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="d-flex justify-content-between">
                <span className="me-3 text-success fs-4"> Hello <span className="text-info fw-bold">{user.displayName}</span> sir! </span>

                {
                    user.email ?
                        <button className="btn btn-info" onClick={logOut}>logout</button>
                        :
                        <NavLink to="/login" className="btn btn-info">Login</NavLink>}
            </div>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;