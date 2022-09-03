import './App.css';
import Calculator from './components/Calculator';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Info from './components/Info';
import Information from './components/Information';
import NavBar from './components/NavBar';
import Stats from './components/Stats';

function App() {
  return (
    <div className="duration-1000">
      <NavBar />
      <Hero />
      <Stats />
      <Info />
      <Calculator />
      <Cards />
      <Information />
    </div>
  );
}

export default App;
