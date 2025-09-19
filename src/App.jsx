import './App.css';
import Header from './components/Header.jsx';
import Introduction from './components/Introduction.jsx';
import Card from './components/Card.jsx';
import AddProfile from './components/AddProfile';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [mode, setMode] = useState("light");
  
  const [cards, setCards] = useState([
    { title: "John Doe", description: "Web Developer" },
    { title: "Joshua Tseitlin", description: "UX Designer" },
    { title: "Ava Smith", description: "UI Designer" },
  ]);

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${mode}`}>
      <Header toggleMode={toggleMode} mode={mode} />

      <section id="home">
        <Introduction />
      </section>

      <section id="about">
      </section>

      <section id="profiles">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search profiles by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
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
                (filterRole === "" || card.description === filterRole)
            )
            .map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                imageName={card.imageName}
                mode={mode}
              />
            ))}
        </div>
      </section>

      <AddProfile
        onAddProfile={(newProfile) => setCards([...cards, newProfile])}
      />
    </div>
  );
}

export default App;
