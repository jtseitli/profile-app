import { createContext, useReducer } from "react";

export const ProfileContext = createContext();

function profileReducer(state, action) {
  switch (action.type) {
    case "ADD_PROFILE":
      return [...state, action.payload];
    default:
      return state;
  }
}

export function ProfileProvider({ children }) {
  const [profiles, dispatch] = useReducer(profileReducer, []);

  const addProfile = (newProfile) => {
    dispatch({ type: "ADD_PROFILE", payload: newProfile });
  };

  return (
    <ProfileContext.Provider value={{ profiles, addProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}
