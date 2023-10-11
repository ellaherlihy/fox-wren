import { Link } from 'react-router-dom';


const Home = () => {
  return (
      <div className="home-page">
        <div className="home-page--container">
          <h1>Leah Herlihy.</h1>
          <div className='home-page--links'>
            <Link to="/about" className='home-page--link'>About.</Link>
            <Link to="/events" className='home-page--link'>Events.</Link>
            <Link to="/contact" className='home-page--link'>Contact.</Link>
          </div>
        </div>
      </div>
  )
}

export default Home;
