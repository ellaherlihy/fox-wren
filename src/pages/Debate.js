import React, { useState, useEffect } from "react";
import Event from "../components/Event";

import image1 from "../images/events/Debate/SpectatorEUdebate_large_04+copy.jpeg"
import image2 from "../images/events/Debate/SpectatorEUdebate_large_07+copy.jpeg"
import image3 from "../images/events/Debate/SpectatorEUdebate_large_08+copy.jpeg"
import image4 from "../images/events/Debate/SpectatorEUdebate_large_13+copy.jpeg"
import image5 from "../images/events/Debate/SpectatorEUdebate_large_15.jpeg"
import image6 from "../images/events/Debate/SpectatorEUdebate_large_24.jpeg"
import image7 from "../images/events/Debate/SpectatorEUdebate_large_30+copy.jpeg"
import image8 from "../images/events/Debate/SpectatorEUdebate_large_55.jpeg"

const images = [image1, image2, image3, image4, image5, image6, image7, image8]

export default function Debate() {
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
        eventTitle="Brexit Debate at the London Palladium"
        eventDescription="Description needed."
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
