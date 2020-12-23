import "./App.scss";
import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import Main from "./components/Main/Main.js";
import Footer from "./components/Footer/Footer.js";
import About from "./components/About/About.js";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Header />
        <Hero />
        <About />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
