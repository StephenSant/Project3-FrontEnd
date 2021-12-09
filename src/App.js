import Home from './pages/Home.js';
import Creatures from './pages/Creatures.js';
import CreatureIndex from './pages/CreatureIndex.js';
import Logs from './pages/Logs.js';
import Planet from './pages/Planet.js';
import System from './pages/System.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/creatures" element = {<Creatures/>}/>
          <Route path="/creature/index" element = {<CreatureIndex/>}/>
          <Route path="/logs" element = {<Logs/>}/>
          <Route path="/planet" element = {<Planet/>}/>
          <Route path="/system" element = {<System/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
