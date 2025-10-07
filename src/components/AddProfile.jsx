import React, { useState, useRef, useEffect } from "react";

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
  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, [success]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const maxSize = 200 * 1024;
      if (file.size > maxSize) {
        setErrors({ ...errors, image: "Image must be 200 KB or smaller" });
        setProfile({ ...profile, image: null, imagePreview: "" });
        return;
      }
      const validTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!validTypes.includes(file.type)) {
        setErrors({ ...errors, image: "Image must be jpg, jpeg, or png" });
        setProfile({ ...profile, image: null, imagePreview: "" });
        return;
      }
      setErrors({ ...errors, image: "" });
      setProfile({ ...profile, image: file, imagePreview: URL.createObjectURL(file) });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!profile.name.trim()) newErrors.name = "Name is required";
    if (!profile.email.trim()) newErrors.email = "Email is required";
    if (!profile.title.trim()) newErrors.title = "Title is required";
    if (!profile.bio.trim()) newErrors.bio = "Bio is required";
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
      onAddProfile(profile);
      setSuccess("Profile added successfully!");
      setProfile({ name: "", email: "", title: "", bio: "", image: null, imagePreview: "" });
    }
  };

  return (
    <div className="add-profile">
      <h2>Add Profile</h2>
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input ref={nameInputRef} type="text" name="name" value={profile.name} onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={profile.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={profile.title} onChange={handleChange} />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>
        <div>
          <label>Bio:</label>
          <textarea name="bio" value={profile.bio} onChange={handleChange}></textarea>
          {errors.bio && <p className="error">{errors.bio}</p>}
        </div>
        <div>
          <label>Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {errors.image && <p className="error">{errors.image}</p>}
        </div>
        {profile.imagePreview && (
          <img
            src={profile.imagePreview}
            alt="Preview"
            style={{ maxWidth: "200px", maxHeight: "200px", marginTop: "0.5rem", borderRadius: "8px" }}
          />
        )}
        <button type="submit" className="add-profile-btn">Add Profile</button>
      </form>
    </div>
  );
}
