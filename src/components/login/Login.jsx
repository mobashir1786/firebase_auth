import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;
        signInWithEmailAndPassword(auth, email, password)
            .then(async (res) => {
                document.cookie = "token=" + res.user.accessToken + "; expires=" + Date.now() + 1 * 24 * 60 * 60 * 1000;
                window.location.href = 'https://firebase-auth-ten.vercel.app/';
            })
            .catch((err) => {
                alert(err.message);
            });
        // console.log(email, password);
    }
    return (
        <div className='login'>
            <div className="loginleft"></div>
            <div className="loginRight">
                <form onSubmit={handleSubmit} className='signupbox'>
                    <input placeholder='Email' type="email" required />
                    <input placeholder='Password' type="password" required />
                    <button type="submit" >Sign-In</button>
                    <Link to="/" className='gotosignup'>
                        <div className='signupwith'>
                            <hr className='leftline' /><span>Don't Have Account</span><hr className='rightline' />
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login
