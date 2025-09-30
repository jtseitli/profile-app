import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

function Profiles() {
  const [titles, setTitles] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch titles
  useEffect(() => {
    fetch("https://web.ics.purdue.edu/~zong6/profile-app/get-titles.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.titles && Array.isArray(data.titles)) {
          setTitles(data.titles);
        }
      })
      .catch((err) => console.error("Error fetching titles:", err));
  }, []);

  // Fetch profiles
  useEffect(() => {
    setLoading(true);

    let url = "https://web.ics.purdue.edu/~zong6/profile-app/fetch-data.php"; // default: all
    if (selectedTitle) {
      url = `https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-filter.php?title=${encodeURIComponent(
        selectedTitle
      )}&name=&page=1&limit=3`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let normalizedProfiles = [];

        if (data.profiles && Array.isArray(data.profiles)) {
          normalizedProfiles = data.profiles;
        } else if (Array.isArray(data)) {
          normalizedProfiles = data;
        }

        setProfiles(normalizedProfiles.slice(0, 3));
      })
      .catch((err) => console.error("Error fetching profiles:", err))
      .finally(() => setLoading(false));
  }, [selectedTitle]);

  return (
    <section id="fetched-profiles">
      <h2>Profiles</h2>

      <div className="search-container">
        <select
          value={selectedTitle}
          onChange={(e) => setSelectedTitle(e.target.value)}
        >
          <option value="">All</option>
          {titles.map((title) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div>

      <div className="card-container">
        {loading ? (
          <p>Loading...</p>
          ) : profiles.length > 0 ? (
          profiles.map((profile) => (
            <Link
              key={profile.id}
              to={`/fetched-profiles/profile/${profile.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card
                title={profile.name}
                description={profile.title}
                bio={profile.email}
                imagePreview={profile.image_url || null}
              />
            </Link>
          ))          
        ) : (
          <p>No profiles found</p>
        )}
      </div>
    </section>
  );
}

export default Profiles;
