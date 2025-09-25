import '../index.css';
import '../App.css';
import '../AddProfile.css';
import { useState } from "react";
import AddProfile from "../components/AddProfile.jsx";

export default function AddProfilePage({ mode }) {
  const [cards, setCards] = useState([]); 
  return (
    <div className={`app ${mode}`}>
      <h2>Add a New Profile</h2>
      <AddProfile onAddProfile={(newProfile) => setCards([...cards, newProfile])} />
    </div>
  );
}
