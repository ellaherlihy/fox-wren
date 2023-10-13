import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";

import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Contact from './pages/Contact'
import SpectatorPotYA from "./pages/SpectatorPotYA";
import ApolloAwards from './pages/ApolloAwards';
import PrivateDinners from './pages/PrivateDinners';
import SerpentineParty from './pages/SerpentineParty';
import SummerParty from './pages/SummerParty';
import Debate from './pages/Debate';
import Talks from './pages/Talks';
import ApolloSummerParty from './pages/ApolloSummerParty';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <div className='App'>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="/events" element={ <Events /> }/>
          <Route path="/contact" element={ <Contact /> }/>
          <Route path="/spectator-parlimentarian-awards" element={ <SpectatorPotYA /> }/>
          <Route path="/apollo-awards" element={ <ApolloAwards /> }/>
          <Route path="/private-dinners" element={ <PrivateDinners /> }/>
          <Route path="/serpentine-party" element={ <SerpentineParty /> }/>
          <Route path="/summer-party" element={ <SummerParty /> }/>
          <Route path="/brexit-debate" element={ <Debate /> }/>
          <Route path="/talks" element={ <Talks /> }/>
          <Route path="/apollo-summer-party" element={ <ApolloSummerParty /> }/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
