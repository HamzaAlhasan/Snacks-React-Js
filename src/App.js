import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Pages/Menu';
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import Home from './Pages/Home';
import Register from './Pages/Signup';
import Login from './Pages/Login';
import { SignIn, SignedOut } from '@clerk/clerk-react';
import Cart from './Pages/Cart';
// console.log(process.env.REACT_APP_CLERK_PUBLISHABLE_KEY);
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/menu' element={<Menu />} />
        <Route path='/aboutUs' element={<Aboutus/>} />
        <Route path='/contactUs' element={<Contactus />} />
        <Route path='/register' element ={<Register />} />
        <Route path='/login' element={<Login/>} />
          <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
