import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Footwear from './pages/Footwear';
import ShoeDetails from './pages/ShoeDetails';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [cartItems, setCartItems] = useState()
    
    const getCartItems = async () => {
        try {
            const res = await axios.get(`/api/cart/${localStorage.getItem("userName")}`)
            const { data } = res
            console.log(data)
            setCartItems(data)
        }  catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (localStorage.getItem("userName")) {
            getCartItems()
        } else {
          setCartItems([])
        }
    }, [])
  
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
      <Navbar cartItems={cartItems} setCartItems={val => setCartItems(prev => prev.filter(item => item.id !== val.id))} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/footwear/:category' element={<Footwear />} />
        <Route path='/product/:shoeSlug' element={<ShoeDetails setCartItems={val => setCartItems(prev => [...prev, val])} />} />
        <Route path='/about' element={<About />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
