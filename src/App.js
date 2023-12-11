import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Pages/Menu';
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import Home from './Pages/Home';
import Register from './Pages/Signup';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Payment from './Pages/Payment';
import Protected from './Data/protected';

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
        <Route path='/cart' element={<Protected />}>
          <Route path='/cart' element={<Cart />} />
        </Route>
        <Route path='/checkout' element={<Protected />}>
          <Route path='/checkout' element={<Payment />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
