import React from "react";
import Header from "./Header";

export default function Event(props) {
  return (
    <div>
      <Header />
      <div className="event--container">
        <h1>{props.eventTitle}</h1>
        <p>{props.eventDescription}</p>
      </div>
    </div>
  )
}
