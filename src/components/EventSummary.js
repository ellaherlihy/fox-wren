import React from "react";

export default function EventSummary(props) {
  return (
    <div className="event-summary--title">
      <h1>{props.title}</h1>
      <img src={`../images/events/spectator-parlimentarian-awards/${props.url}`} alt={props.title}></img>
    </div>
  )
}
