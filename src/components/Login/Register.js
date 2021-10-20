import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {

    const{ signInUsingGoogle, handleUserRegister}=useAuth();
    const[email, setEmail]= useState("");
    const[password, setPassword] = useState("");
    const[error, setError]= useState("");

    const handleEmail= (e)=>{
        setEmail(e.target.value);
    };

    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }

    const handleRegister=(e)=>{
        e.preventDefault()
        handleUserRegister(email, password)
        if(password.length<6){
            setError('password must be six characters long')
        }
    }



    return (

        <div style={{ 
            backgroundImage: `url("https://images6.alphacoders.com/330/330563.jpg")` 
          }}>


        <div>
            <div className="row py-5">
            <h1 > Please Register</h1>
                <div className="col-lg-4"></div>
                <div className="col-lg-4 card p-5">
                <form  className="p-3">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Your name</label>
                    <input  type="text" className="form-control" placeholder=" name" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={handleEmail}  type="email" className="form-control"  required placeholder="email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={handlePassword}  type="password" className="form-control" required placeholder="password" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="log-btn ">
                    <button className="btn btn-lg btn-info" onClick={handleRegister} type="submit"> <span><i class="fas fa-arrow-circle-right"></i></span> Register</button>
                
                <div>
                <p>Already have an account?</p> <Link to="/login">Please Login</Link>
                </div>
                </div>
            </form>
            <button onClick={signInUsingGoogle}  type="submit" className="btn btn-secondary"><span><i class="fab fa-google text-info fs-5"></i></span> Login with Google</button>
            </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
        </div>
    );
};

export default Register;