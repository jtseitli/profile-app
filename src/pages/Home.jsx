import '../index.css';
import '../App.css';
import '../AddProfile.css';
import { useState } from "react";
import Introduction from "../components/Introduction.jsx";
import Card from "../components/Card.jsx";
import Profiles from "../components/Profiles.jsx";
import AddProfile from "../components/AddProfile.jsx";

export default function Home({ mode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [cards, setCards] = useState([
    { title: "John Doe", description: "Web Developer" },
    { title: "Joshua Tseitlin", description: "UX Designer" },
    { title: "Ava Smith", description: "UI Designer" },
  ]);

  return (
    <div className={`app ${mode}`}>
      <section id="home">
        <Introduction />
      </section>

      <section id="local-profiles">
        <h2>Local Profiles</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search profiles by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
          >
            <option value="">All Roles</option>
            <option value="Web Developer">Web Developer</option>
            <option value="UX Designer">UX Designer</option>
            <option value="UI Designer">UI Designer</option>
          </select>
        </div>

        <div className="card-container">
          {cards
            .filter(
              (card) =>
                card.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (filterRole === "" ||
                  card.title === filterRole ||
                  card.description === filterRole)
            )
            .map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
        </div>
      </section>

      <section id="fetched-profiles">
        <Profiles />
      </section>

    </div>
  );
}
