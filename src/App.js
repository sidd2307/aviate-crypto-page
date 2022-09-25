import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Socials from './components/Socials';
import Home from './pages/Home';
import Chart from './pages/Chart';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trendchart' element={<Chart />} />
      </Routes>
      <Footer />
      <Socials />
    </BrowserRouter>
  );
}

export default App;
