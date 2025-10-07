import React, { useRef, useLayoutEffect, useState } from "react";

function Card({ title, description, bio, imagePreview }) {
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useLayoutEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
    }
  }, []);

  return (
    <div ref={cardRef} className="card">
      {imagePreview && <img src={imagePreview} alt={title} className="card-image" />}
      <h2>{title}</h2>
      <p>{description}</p>
      {bio && <p>{bio}</p>}
    </div>
  );
}

export default Card;
