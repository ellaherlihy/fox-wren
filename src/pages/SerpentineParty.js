import React, { useState, useEffect } from "react";
import Event from "../components/Event";

import image1 from "../images/events/Serpentine Pavilion/20190904-DSC_2402.jpeg"
import image2 from "../images/events/Serpentine Pavilion/20190904-DSC_2429.jpeg"
import image3 from "../images/events/Serpentine Pavilion/20190904-NEH_0874.jpeg"
import image4 from "../images/events/Serpentine Pavilion/20190904-NEH_0884.jpeg"

const images = [image1, image2, image3, image4]

export default function SerpentineParty() {
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
        eventTitle="Party at the Serpentine Pavilion"
        eventDescription="Art world party held in late summer.  Managed all elements of the evening."
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
