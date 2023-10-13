import React, { useState, useEffect } from "react";
import Event from "../components/Event";

import image1 from "../images/events/Private Dinners/Clare's+Nikon+2016+342+-+Copy.jpeg"
import image2 from "../images/events/Private Dinners/Clare's+Nikon+2016+354+copy.jpeg"
import image3 from "../images/events/Private Dinners/IMG_1887.jpeg"
import image4 from "../images/events/Private Dinners/IMG_1900.jpeg"
import image5 from "../images/events/Private Dinners/photo+12.jpeg"
import image6 from "../images/events/Private Dinners/photo+4.jpeg"
import image7 from "../images/events/Private Dinners/tempImageB2x8fH.jpeg"
import image8 from "../images/events/Private Dinners/tempImageKcfZOx.png"


const images = [image1, image2, image3, image4, image5, image6, image7, image8]

export default function PrivateDinners() {
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
        eventTitle="Private Dinners"
        eventDescription="Private dinners for high profile art collectors, academics and gallery owners.
        Responsibilities include venue sourcing, catering arrangements, invitation and guest management, table design and sponsor management."
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
