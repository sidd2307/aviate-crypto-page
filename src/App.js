import './App.css';
import Calculator from './components/Calculator';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Info from './components/Info';
import Information from './components/Information';
import NavBar from './components/NavBar';
import Socials from './components/Socials';
import Stats from './components/Stats';
import Subscription from './components/Subscription';

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
      <Subscription />
      <Footer />
      <Socials />
    </div>
  );
}

export default App;
