import React from "react";
import Header from "./Header";
import Fade from 'react-reveal/Fade';

export default function Event(props) {
  return (
    <div>
      <Header />
        <div className="event--page">
          <div className="event--container">
            <Fade bottom>
              <h1>{props.eventTitle}</h1>
              <p>{props.eventDescription}</p>
            </Fade>
          </div>
        </div>
    </div>
  )
}
