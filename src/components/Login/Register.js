import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {


    return (
        <div>
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                <form  className="p-3">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input  type="email" class="form-control"  required placeholder="email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input  type="password" class="form-control" required placeholder="password" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="log-btn d-flex justify-content-around">
                <input type="submit" value="Register" />
                <div>
                <p>Already have an account</p> <Link to="/login">Please Login</Link>
                </div>
                </div>
            </form>
            <button  type="submit" class="btn btn-primary">Login with Google</button>
            </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    );
};

export default Register;