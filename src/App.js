import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Stats from './components/Stats';

function App() {
  return (
    <div className="duration-1000">
      <NavBar />
      <Hero />
      <Stats />
    </div>
  );
}

export default App;
