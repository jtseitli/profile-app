import React, { useState } from "react";

export default function AddProfile({ onAddProfile }) {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    title: "",
    bio: "",
    image: null,
    imagePreview: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({ ...profile, image: file, imagePreview: URL.createObjectURL(file) });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!profile.name) newErrors.name = "Name is required";
    if (!profile.email) newErrors.email = "Email is required";
    if (!profile.title) newErrors.title = "Title is required";
    if (!profile.bio) newErrors.bio = "Bio is required";
    if (!profile.image) newErrors.image = "Image is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Profile added!");
      onAddProfile(profile);
      setProfile({ name: "", email: "", title: "", bio: "", image: null, imagePreview: "" });
    }
  };

  return (
    <div className="add-profile">
      <h2>Add Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={profile.name} onChange={handleChange} />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        <label>Email:</label>
        <input type="email" name="email" value={profile.email} onChange={handleChange} />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <label>Title:</label>
        <input type="text" name="title" value={profile.title} onChange={handleChange} />
        {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}

        <label>Bio:</label>
        <textarea name="bio" value={profile.bio} onChange={handleChange}></textarea>
        {errors.bio && <p style={{ color: "red" }}>{errors.bio}</p>}

        <label>Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}

        {profile.imagePreview && (
          <img
            src={profile.imagePreview}
            alt="Preview"
            style={{ maxWidth: "1024px", maxHeight: "1024px", marginTop: "0.5rem" }}
          />
        )}

        <button type="submit">Submit</button>
      </form>

      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}
