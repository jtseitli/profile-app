function Card({ title, description, bio, imagePreview }) {
  return (
    <div className="card">
      {imagePreview && (
        <img
          src={imagePreview}
          alt={title}
          className="card-image"
          style={{ maxWidth: "150px", maxHeight: "150px", borderRadius: "8px", marginBottom: "0.5rem" }}
        />
      )}
      <h2>{title}</h2>
      <p>{description}</p>
      {bio && <p>{bio}</p>}
    </div>
  );
}

export default Card;
