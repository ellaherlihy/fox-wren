import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Contact from './pages/Contact'
// import Header from './components/Header'

const App = () => {
  return (
      <div>
          <div className='App'>
          {/* <Header /> */}
          <Routes>
              <Route path="/" element={ <Home /> }/>
              <Route path="/about" element={ <About /> }/>
              <Route path="/about" element={ <Events /> }/>
              <Route path="contact" element={ <Contact /> }/>
          </Routes>
          </div>
      </div>
  )
}

export default App;
