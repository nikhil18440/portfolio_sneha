import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Navbar/Navbar';
import Hero from './componants/Hero/Hero';
import Works from './componants/works/Works';
import Contact from './componants/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
