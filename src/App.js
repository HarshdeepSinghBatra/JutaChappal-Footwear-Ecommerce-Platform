import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footwear from './pages/Footwear';
import ShoeDetails from './pages/ShoeDetails';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/footwear' element={<Footwear />} />
        <Route path='/footwear/:id' element={<ShoeDetails />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
