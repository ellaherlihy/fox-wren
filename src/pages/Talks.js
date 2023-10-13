import React, { useState, useEffect } from "react";
import Event from "../components/Event";

// import image1 from "../images/events/Talks/145%25252B-%25252BIMG_9003.jpeg"
import image2 from "../images/events/Talks/20130117kofi+annan_A.jpeg"
import image3 from "../images/events/Talks/PartyPolitics_Large_30.jpeg"
import image4 from "../images/events/Talks/Spectator_budgetbriefing2016_large_029+copy.jpeg"
import image5 from "../images/events/Talks/Spectator_budgetbriefing2016_large_046+copy.jpeg"
import image6 from "../images/events/Talks/spectator_220519_cannabis_052+copy.jpeg"
import image7 from "../images/events/Talks/spectator_261018_151.jpeg"
import image8 from "../images/events/Talks/spectator_NHS_180319_010+copy.jpeg"
import image9 from "../images/events/Talks/spectator_davidson_240918032+copy.jpeg"
import image10 from "../images/events/Talks/spectator_murray_281019_014.jpeg"
// import image11 from "../images/events/Talks/145%25252B-%25252BIMG_9003.jpeg"

const images = [image2, image3, image4, image5, image6, image7, image8, image9, image10]

export default function Talks() {
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
        eventTitle="Talks"
        eventDescription="During my time at the Spectator as Events Director, we organised a huge range of talks and discussions, from 2,000 seater auditorium events with high profile politicians and statesmen, to more intimate discussions on wide-ranging topics of day, as well as events with some of the publication’s most cherished contributors.
        Responsibilities included leading on the overall design of the event, team management, budget setting, speaker & VIP liaison, marketing, content curation and sponsor relationship management."
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
