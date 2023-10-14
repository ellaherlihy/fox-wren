import React, { useState, useEffect } from "react";
import Event from "../components/Event";

import image1 from "../images/events/Apollo Summer Party/10.jpeg"
import image2 from "../images/events/Apollo Summer Party/2016-07-04_apollo_summer_party_0021.jpeg"
import image3 from "../images/events/Apollo Summer Party/2016-07-04_apollo_summer_party_0089.jpeg"
import image4 from "../images/events/Apollo Summer Party/_MTL7712.jpeg"
import image5 from "../images/events/Apollo Summer Party/tempImage7bHkAT.png"
import image6 from "../images/events/Apollo Summer Party/tempImageMOcSqY.png"

const images = [image1, image2, image3, image4, image5, image6];

export default function ApolloSummerParty() {
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
        eventTitle="Apollo Summer Party"
        eventDescription="Apollo magazine’s annual garden party, where leading figures from the museum and art worlds gather in the garden of the publication’s offices."
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
