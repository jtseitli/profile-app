import React from "react";
import Profiles from "../components/Profiles";
import { Outlet } from "react-router-dom";

function OtherProfiles({ mode }) {
  return (
    <div className={`app ${mode}`}>
      <h1>Fetched Profiles</h1>
      <Profiles />
      <Outlet /> {/* Nested routes render here */}
    </div>
  );
}

export default OtherProfiles;