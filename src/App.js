import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/signup/Signup';
import Login from './components/login/Login'
// import { useState } from 'react';
import Home from './components/home/Home';

function App() {

  let cookie = document.cookie;
  console.log(cookie);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={cookie.length === 2 ? <Home /> : <Login />} />
          <Route path='/' element={cookie ? <Home /> : <Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
