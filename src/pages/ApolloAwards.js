import React, { useState, useEffect } from "react";
import Event from "../components/Event";

import image1 from "../images/events/Apollo/4C98E826-41A9-4E6A-B764-F0067D25DC74.jpeg"
import image2 from "../images/events/Apollo/Apollo_Awards_2016_small_017.jpeg"
import image3 from "../images/events/Apollo/Apollo_Awards_2016_small_020.jpeg"
import image4 from "../images/events/Apollo/Apollo_Awards_2016_small_040.jpeg"
import image5 from "../images/events/Apollo/Apollo_Awards_2016_small_119.jpeg"
import image6 from "../images/events/Apollo/Apollo_Awards_2016_small_121.jpeg"

const images = [image1, image2, image3, image4, image5, image6]

export default function ApolloAwards() {
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
        eventTitle="Apollo Awards Dinner"
        eventDescription="Management of the art magazine’s annual awards dinner, celebrating major achievements in the art and museum worlds"
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
