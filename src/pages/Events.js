import Header from "../components/Header";
// import EventSummary from "../components/EventSummary";
// import { eventSummariesData } from "../EventSummariesData";
import image1 from "../images/events/spectator-parlimentarian-awards/241121_parli2021-002.jpeg"

export default function Events() {
  return (
    <div>
    <Header />
      <div className="events-page--container">
        <h1>Events</h1>
        <div className="events-page--event-preview">
          <img src={image1} alt="" />
          <h2>Spectator Parliamentarian of the Year Awards</h2>
        </div>
        <div className="events-page--event-preview">
          <img src={image1} alt="" />
          <h2>Spectator Parliamentarian of the Year Awards</h2>
        </div>
      </div>
    </div>
  )
}
