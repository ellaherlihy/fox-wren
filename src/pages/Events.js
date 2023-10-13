import Header from "../components/Header";
import { Link } from 'react-router-dom';

import spectatorPoYAImage from "../images/events/spectator-parlimentarian-awards/241121_parli2021-002.jpeg"
import ApolloAwardsimage from "../images/events/Apollo/Apollo_Awards_2016_small_017.jpeg"
import PrivateDinnersImage from "../images/events/Private Dinners/Clare's+Nikon+2016+342+-+Copy.jpeg"
import SerpentinePartyImage from "../images/events/Serpentine Pavilion/20190904-NEH_0884.jpeg"
import SpectatorSummerPartyImage from "../images/events/Spectator Summer Party/SummerParty2016_028.jpeg"
import DebateImage from "../images/events/Debate/SpectatorEUdebate_large_55.jpeg"
import TalksImage from "../images/events/Talks/20130117kofi+annan_A.jpeg"
import ApolloSummerPartyImage from "../images/events/Apollo Summer Party/2016-07-04_apollo_summer_party_0021.jpeg"

export default function Events() {
  return (
    <div>
      <Header />
      <div className="events-page">
        <h1>Events</h1>
        <div className="events-page--container">
          <Link to="/spectator-parlimentarian-awards">
            <div className="events-page--event-preview">
              <div className="event-preview--img">
                <img src={spectatorPoYAImage} alt="" />
              </div>
              <h2>Spectator Parliamentarian of the Year Awards</h2>
            </div>
          </Link>
          <Link to="/apollo-awards">
            <div className="events-page--event-preview">
              <div className="event-preview--img">
                <img src={ApolloAwardsimage} alt="" />
              </div>
              <h2>Apollo Awards Dinner</h2>
            </div>
          </Link>
          <Link to="/private-dinners">
            <div className="events-page--event-preview">
              <div className="event-preview--img">
                <img src={PrivateDinnersImage} alt="" />
              </div>
              <h2>Private Dinners</h2>
            </div>
          </Link>
          <Link to="/serpentine-party">
          <div className="events-page--event-preview">
            <div className="event-preview--img">
              <img src={SerpentinePartyImage} alt="" />
            </div>
            <h2>Serpentine Pavilion Party</h2>
          </div>
          </Link>
          <Link to="/summer-party">
            <div className="events-page--event-preview">
              <div className="event-preview--img">
                <img src={SpectatorSummerPartyImage} alt="" />
              </div>
              <h2>Spectator Summer Party</h2>
            </div>
          </Link>
          <Link to="/brexit-debate">
            <div className="events-page--event-preview">
              <div className="event-preview--img">
                <img src={DebateImage} alt="" />
              </div>
              <h2>Brexit Debate at the London Palladium</h2>
            </div>
          </Link>
          <Link to="/talks">
            <div className="events-page--event-preview">
              <div className="event-preview--img">
                <img src={TalksImage} alt="" />
              </div>
              <h2>Talks</h2>
            </div>
          </Link>
          <Link to="/apollo-summer-party">
          <div className="events-page--event-preview">
            <div className="event-preview--img">
              <img src={ApolloSummerPartyImage} alt="" />
            </div>
            <h2>Apollo Summer Party</h2>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
