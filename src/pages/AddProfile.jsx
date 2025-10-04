import '../index.css';
import '../App.css';
import '../AddProfile.css';
import { useContext } from "react";
import AddProfile from "../components/AddProfile.jsx";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../context/ProfileContext.jsx";

export default function AddProfilePage({ mode }) {
  const { addProfile } = useContext(ProfileContext);
  const navigate = useNavigate();

  const handleAddProfile = (newProfile) => {
    addProfile(newProfile); 
    navigate("/"); 
  };

  return (
    <div className={`app ${mode}`}>
      <h2>Add a New Profile</h2>
      <AddProfile onAddProfile={handleAddProfile} />
    </div>
  );
}
