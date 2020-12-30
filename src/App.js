import './App.css';
import Header from './components/Header/Header.js';
import Hero from './components/Hero/Hero.js';
import Work from './components/Work/Work.js';
import Footer from './components/Footer/Footer.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';

function App() {
  return (
    <div className='app'>
      <div className='app-container'>
        <Header />
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
