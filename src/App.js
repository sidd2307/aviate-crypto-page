import './App.css';
import Calculator from './components/Calculator';
import Hero from './components/Hero';
import Info from './components/Info';
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
    </div>
  );
}

export default App;
