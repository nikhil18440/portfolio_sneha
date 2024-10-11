import logo from './logo.svg';
import './App.css';
import Works from './componants/works/Works';
import Contact from './componants/contact/Contact';
import Skills from './componants/skills/Skills';
import Education from './componants/education/Education';
import Hero from './componants/hero/Hero';
import Softwares from './componants/softwares/Softwares';
import Achievements from './componants/achievements/Achievements';
import Events from './componants/events/Events';
import Social from './componants/social/Social';

function App() {
  return (
    <div className="App">
      <Hero/>
      <div className='gapDiv'></div>
      <Works/>
      <Softwares/>
      <Achievements/>
      <Events/>
      
      <Contact/>
      <Social/>
      
    </div>
  );
}

export default App;
