import React from "react";
import Header from "../components/Header";
import MastercardLogo from "../images/client-logos/Mastercard-logo.png"
import NetflixLogo from "../images/client-logos/netflix.png"
import DBLogo from "../images/client-logos/deutsche-bank.png"
import AGLogo from "../images/client-logos/arte-generali.png"
import DLALogo from "../images/client-logos/DLA_Piper.png"
import Rathbones from "../images/client-logos/Rathbones.png"
import BitmexLogo from "../images/client-logos/Bitmex_logo.png"
import BrewinDolphin from "../images/client-logos/BrewinDolphin.png"
import BarclaysLogo from "../images/client-logos/Barclays-Wealth.png"
import Pfizer from "../images/client-logos/Pfizer.png"
import JBLogo from "../images/client-logos/JBLogo.svg.png"
import PolRoger from "../images/client-logos/polroger.jpeg"
import QCLogo from "../images/client-logos/QClogo.jpeg"
import SMLLogo from "../images/client-logos/SML.png"
import Porsche from "../images/client-logos/porsche.png"
import RR from "../images/client-logos/RR.png"
import SevenIm from "../images/client-logos/7im.png"
import AAM from "../images/client-logos/AAM.png"
import IMLogo from "../images/client-logos/investec.png"
import BMW from "../images/client-logos/BMW.png"
import KWAM from "../images/client-logos/KWAM.png"
import Airbnb from "../images/client-logos/airbnb.png"

const About = () => {
  return(
      <div className="about-page">
        <Header />
        <div className="about-page--container">
          <div className="about-page--text">
            <div className="about-page--main-content">
              <h1>About</h1>
              <p>
                I am an events professional with 15 years’ experience organising a variety of high profile events with prime ministers, film stars, celebrities, international politicians, high profile artists, news broadcasters and leaders in business.
                Events have ranged from 2000-seater auditorium evenings to intimate boardroom dinners and everything in between.
                I have an excellent network of contacts in the events industry, and strong success at nurturing and leading a team.
              </p>
            </div>
            <div className="about-page--services">
            <h1>Services</h1>
              <ul>
                <li>Event Management</li>
                <li>Event Design</li>
                <li>Tablescaping</li>
                <li>Budget Management</li>
                <li>Speaker Acquisition</li>
                <li>Content Curation & Consultancy</li>
              </ul>
            </div>
          </div>
          <div className="about-page--clients">
            <h1>Clients</h1>
            <div className="about-page--client-logos">
              <img src={MastercardLogo} alt="mastercard-logo"/>
              <img src={NetflixLogo} alt="netflix-logo"/>
              <img src={DBLogo} alt="DB-logo"/>
              <img src={AGLogo} alt="Ag-logo"/>
              <img src={Rathbones} alt="Rathbones-logo"/>
              <img src={BitmexLogo} alt="Bitmex-logo"/>
              <img src={BarclaysLogo} alt="Barclays-logo"/>
              <img src={Pfizer} alt="Pfizer-logo"/>
              <img src={JBLogo} alt="JB-logo"/>
              <img src={PolRoger} alt="PolRoger-logo"/>
              <img src={QCLogo} alt="QC-logo"/>
              <img src={SMLLogo} alt="SML-logo"/>
              <img src={Porsche} alt="Porsche-logo"/>
              <img src={SevenIm} alt="7im-logo"/>
              <img src={AAM} alt="AAM-logo"/>
              <img src={IMLogo} alt="IM-logo"/>
              <img src={BMW} alt="BMW"/>
              <img src={KWAM} alt="KWAM"/>
              <img src={Airbnb} alt="Airbnb"/>
              <img src={BrewinDolphin} alt="BD-logo"/>
              <img src={DLALogo} alt="DLA-logo"/>
              <img src={RR} alt="RR-logo"/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About
