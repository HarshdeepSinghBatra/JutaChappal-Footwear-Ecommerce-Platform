import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Footwear from './pages/Footwear';
import ShoeDetails from './pages/ShoeDetails';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/footwear/:category' element={<Footwear />} />
        <Route path='/product/:shoeSlug' element={<ShoeDetails />} />
        <Route path='/about' element={<About />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
