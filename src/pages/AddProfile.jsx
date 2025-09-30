import '../index.css';
import '../App.css';
import '../AddProfile.css';
import { useState } from "react";
import AddProfile from "../components/AddProfile.jsx";
import { useNavigate } from "react-router-dom";

export default function AddProfilePage({ mode }) {
  const [cards, setCards] = useState([]); 
  const navigate = useNavigate();

  const handleAddProfile = (newProfile) => {
    setCards([...cards, newProfile]);
    navigate("/"); 
  };

  return (
    <div className={`app ${mode}`}>
      <h2>Add a New Profile</h2>
      <AddProfile onAddProfile={handleAddProfile} />
    </div>
  );
}
