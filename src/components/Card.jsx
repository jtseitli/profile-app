function Card({ title, description, bio, image }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <h2>{title}</h2>
      <p>{description}</p>
      {bio && <p>{bio}</p>}
    </div>
  )
}

export default Card;
