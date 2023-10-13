import React, { useState, useEffect } from "react";
import Event from "../components/Event";

import image1 from "../images/events/spectator-parlimentarian-awards/241121_parli2021-001.jpeg"
import image2 from "../images/events/spectator-parlimentarian-awards/241121_parli2021-002.jpeg"
import image3 from "../images/events/spectator-parlimentarian-awards/241121_parli2021-012.jpeg"
import image4 from "../images/events/spectator-parlimentarian-awards/241121_parli2021-084.jpeg"
import image5 from "../images/events/spectator-parlimentarian-awards/241121_parli2021-104.jpeg"
import image6 from "../images/events/spectator-parlimentarian-awards/241121_parli2021-118.jpeg"
import image7 from "../images/events/spectator-parlimentarian-awards/241121_parli2021-151.jpeg"
import image8 from "../images/events/spectator-parlimentarian-awards/241121_parli2021-157.jpeg"

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

export default function SpectatorPotYA() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [enlarged, setEnlarged] = useState(null);
  const enlargeImage = (image) => {
    setEnlarged(image);
  };

  const closeImage = () => {
    setEnlarged(null);
  };
  return (
    <div>
      <Event
        eventTitle="Spectator Parliamentarian of the Year Awards 2021"
        eventDescription="Management of this prestigious awards ceremony in its entirety, from the illustrious guest list to the stage design; from the floral arrangements to the menu choices.
        This event is a firm favourite in the calendar of the great and good of Westminster and political media."
      />
      <div className="event--image-gallery">
        {images.map((image, index) => (
          <img key={index}
          src={image}
          alt={`${index + 1}`}
          onClick={() => enlargeImage(image)}
          className="event--image"/>
        ))}
        {enlarged && (
        <div className="enlarged-image" onClick={closeImage}>
          <img src={enlarged} alt="Enlarged" />
        </div>
      )}
      </div>
    </div>
  )
}
