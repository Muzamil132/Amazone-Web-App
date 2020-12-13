import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth)
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
               console.log(auth)
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
        <div>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input  className="login_input" type='text' value={email} onChange={e => setemail(e.target.value)} />

                    <h5>Password</h5>
                    <input  className="login_input" type='password' value={password} onChange={e => setpassword(e.target.value)} />

                    <button  type='submit' onClick={signIn} className='login_btn'>Sign In</button>
                </form>


                <button  type onClick={register} className='login_btn'>Create your Amazon Account</button>
            </div>
        </div>
        </div>
       
    )
}

export default Login
