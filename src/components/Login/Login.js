import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import img from '../../images/log-bg.webp'

const Login = () => {
    const{ signInUsingGoogle, handleUserLogin}=useAuth();
    const[email, setEmail]= useState("");
    const[password, setPassword] = useState("");

    const handleEmail= (e)=>{
        setEmail(e.target.value);
    };

    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }

    const handleLogin = ()=>{
        handleUserLogin(email, password)
    }


    return (
        <div style={{ 
            backgroundImage: `url("https://wallpaperaccess.com/full/1900851.png")` 
          }}>


        <div>
            <div className="row py-5">
                <h1 className="text-white"> Please login</h1>
                <div className="col-lg-4"></div>
                <div className="col-lg-4 card p-5">
                <form className="p-3 ">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={handleEmail}  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={handlePassword }  type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="log-btn d-flex justify-content-around">
                <button onClick={handleLogin}  type="submit" className="btn btn-primary"><span><i class="fas fa-arrow-circle-right"></i></span> Login</button>
                </div>
            </form>
            <p>New to Medidoor? <Link to="/register">Create Account</Link></p>
            <hr />
            <button onClick={signInUsingGoogle}  type="submit" className="btn btn-secondary"><span><i class="fab fa-google text-info fs-5"></i></span> Login with Google</button>
            </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
        </div>
    );
};

export default Login;