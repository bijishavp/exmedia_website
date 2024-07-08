
import './App.css';
import About from './components/About';

import Contact from './components/Contact';
import Header from './components/Header';
import Intro from './components/Intro';
import Qualification from './components/Services';


function App() {
  return (
   <>
      <div className="app">

        <Header/>
        <Intro />
        <About/>
        <Qualification/>
        <Contact/>
       
      </div>
   </>
  );
}

export default App;
