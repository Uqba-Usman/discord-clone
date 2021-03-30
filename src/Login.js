import { Button } from '@material-ui/core';
import React from 'react';
import {auth, provider} from './firebase';
import "./Login.css";

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(err => alert(err.message));
    }
    return (
        <div className="login">
            {/* <h2>I am the login page</h2> */}
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/233px-Discord_logo.svg.png"
                 alt="" />
            </div>
            <Button onClick={signIn}  >Sign In</Button> 
        </div>
    )
}

export default Login;
