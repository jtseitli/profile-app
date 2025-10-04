import { createContext, useState } from "react";

export const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profiles, setProfiles] = useState([]);

  const addProfile = (newProfile) => {
    setProfiles((prevProfiles) => [...prevProfiles, newProfile]);
  };

  return (
    <ProfileContext.Provider value={{ profiles, addProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}
