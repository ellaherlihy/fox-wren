import Header from "../components/Header";
// import EventSummary from "../components/EventSummary";
// import { eventSummariesData } from "../EventSummariesData";
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
      <div className="events-page--container">
        <h1>Events</h1>
        <div className="events-page--event-preview">
          <img src={spectatorPoYAImage} alt="" />
          <h2>Spectator Parliamentarian of the Year Awards</h2>
        </div>
        <div className="events-page--event-preview">
          <img src={ApolloAwardsimage} alt="" />
          <h2>Apollo Awards Dinner</h2>
        </div>
        <div className="events-page--event-preview">
          <img src={PrivateDinnersImage} alt="" />
          <h2>Private Dinners</h2>
        </div>
        <div className="events-page--event-preview">
          <img src={SerpentinePartyImage} alt="" />
          <h2>Serpentine Pavilion Party</h2>
        </div>
        <div className="events-page--event-preview">
          <img src={SpectatorSummerPartyImage} alt="" />
          <h2>Spectator Summer Party</h2>
        </div>
        <div className="events-page--event-preview">
          <img src={DebateImage} alt="" />
          <h2>Brexit Debate at the London Palladium</h2>
        </div>
        <div className="events-page--event-preview">
          <img src={TalksImage} alt="" />
          <h2>Talks</h2>
        </div>
        <div className="events-page--event-preview">
          <img src={ApolloSummerPartyImage} alt="" />
          <h2>Apollo Summer Party</h2>
        </div>
      </div>
    </div>
  )
}
