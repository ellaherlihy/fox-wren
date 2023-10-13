import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Contact from './pages/Contact'
import SpectatorPotYA from "./pages/SpectatorPotYA";

const App = () => {
  return (
    <div>
      <div className='App'>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="/events" element={ <Events /> }/>
          <Route path="/contact" element={ <Contact /> }/>
          <Route path="/spectator-parlimentarian-awards" element={ <SpectatorPotYA /> }/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
