import React from 'react';
import './home.css'

const Home = () => {
    const handleLogout = () => {
        // console.log("logout");
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:01 GMT";
        window.location.href = 'http://localhost:3000';
    }
    return (
        <div className='homePage'>
            <h1>Welcome to login and registration page using firebase authentication.</h1>
            <button className='logoutbtn' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home
