import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const{ signInUsingGoogle, handleUserLogin}=useAuth()


    return (
        <div>
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                <form className="p-3">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input onChange={handleUserLogin} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input  type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="log-btn d-flex justify-content-around">
                <button  type="submit" class="btn btn-primary">Login</button>
                </div>
            </form>
            <p>New to Medidoor? <Link to="/register">Create Account</Link></p>
            <hr />
            <button onClick={signInUsingGoogle}  type="submit" class="btn btn-primary">Login with Google</button>
            </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    );
};

export default Login;