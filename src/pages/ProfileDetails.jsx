import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProfileDetails() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-id.php?id=${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) setError(data.error);
        else setProfile(data);
      })
      .catch(() => setError("Error fetching profile"));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!profile) return <p>Loading profile...</p>;

  return (
    <div>
      <h2>{profile.name}</h2>
      <p>Title: {profile.title}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
}

export default ProfileDetails;
