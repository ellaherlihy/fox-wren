import { Link } from 'react-router-dom';


const Home = () => {
  return (
      <div className="home-page">
        <div className="home-page--container">
          <h1>Leah Herlihy.</h1>
          <div className='home-page--links'>
            <Link to="/">Home.</Link>
            <Link to="/about">About.</Link>
            <Link to="/events">Events.</Link>
            <Link to="/contact">Contact.</Link>
          </div>
        </div>
      </div>
  )
}

export default Home;
