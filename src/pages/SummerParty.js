import React, { useState, useEffect } from "react";
import Event from "../components/Event";

import image1 from "../images/events/Spectator Summer Party/0A0AA783-8F80-4AAB-9642-B961E0B0E694.jpeg"
import image2 from "../images/events/Spectator Summer Party/F00C3527-6FD9-41C5-85A9-36DDA83CD10B.jpeg"
import image3 from "../images/events/Spectator Summer Party/SummerParty2016_028.jpeg"
import image4 from "../images/events/Spectator Summer Party/SummerParty2016_lores_004+copy.jpeg"
import image5 from "../images/events/Spectator Summer Party/spec_summerparty2019_016+copy.jpeg"
import image6 from "../images/events/Spectator Summer Party/spectator_summerparty_2018_002.jpeg"

const images = [image1, image2, image3, image4, image5, image6]

export default function SummerParty() {
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
        eventTitle="Spectator Summer Party"
        eventDescription="A garden party that has been a fixture of the Spectator magazine for over a century.
        Event management including the overall look of the party; the bar design, florals, drinks menu, guest list and invitations, marquee hire and VIP security.  The party often makes the front pages of the London press.  Guests are made up of contributors and friends of the magazine, the cream of news and political media and high profile politicians, from the Prime Minister down."
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
