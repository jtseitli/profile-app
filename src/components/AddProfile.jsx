import React, { useState } from "react";

export default function AddProfile({ onAddProfile }) {
  const [profile, setProfile] = useState({
    name: "",
    title: "",
    email: "",
    bio: "",
    image: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setProfile({ ...profile, image: files[0] });
    } else {
      setProfile({ ...profile, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!profile.name.trim()) newErrors.name = "Name is required";
    if (!profile.title.trim()) newErrors.title = "Title is required";
    if (!profile.email.trim()) newErrors.email = "Email is required";
    if (!profile.bio.trim()) newErrors.bio = "Bio is required";
    if (!profile.image) {
      newErrors.image = "Image is required";
    } else {
      const validTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!validTypes.includes(profile.image.type)) {
        newErrors.image = "Image must be jpg, jpeg, or png";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onAddProfile(profile);
      setProfile({ name: "", title: "", email: "", bio: "", image: null });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          required
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
      </div>

      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={profile.title}
          onChange={handleChange}
          required
        />
        {errors.title && <span style={{ color: "red" }}>{errors.title}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div>

      <div>
        <label>Bio:</label>
        <textarea
          name="bio"
          type="text"
          value={profile.bio}
          onChange={handleChange}
          required
        />
        {errors.bio && <span style={{ color: "red" }}>{errors.bio}</span>}
      </div>

      <div>
        <label>Image:</label>
        <input type="file" name="image" accept="image/*" onChange={handleChange} />
        {errors.image && <span style={{ color: "red" }}>{errors.image}</span>}
      </div>

      <button type="submit" className="add-profile-btn">Add Profile</button>
    </form>
  );
}
