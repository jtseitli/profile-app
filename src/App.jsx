import './App.css'
import Header from './components/Header.jsx'
import Introduction from './components/Introduction.jsx'
import AddProfile from './components/AddProfile'
import Card from './components/Card.jsx'
import './AddProfile.css'
import { useState } from 'react';




function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const handleAddProfile = (newProfile) => {
    console.log("New profile added:", newProfile);
  };

  const cards = [
    { title: "John Doe", description: "Web Developer" },
    { title: "Joshua Tseitlin", description: "UX Designer" },
    { title: "Ava Smith", description: "UI Designer" },
  ];
  
  return (
  <div className={`app ${mode}`}>
    <Header toggleMode={toggleMode} mode={mode} />

      <section id="home">
      <Introduction />
      </section>

      <section id="about">
        {/*about section*/}
      </section>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search profiles by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={filterRole} onChange={(e) =>setFilterRole(e.target.value)}>
          <option value={""}>All Roles</option>
          <option value={"Web Developer"}>Web Developer</option>
          <option value={"UX Designer"}>UX Designer</option>
          <option value={"UI Designer"}>UI Designer</option>

        </select>
      </div>

      <section id="profiles"> 
      <div className="card-container"> 
        {cards //*AI was used here to help combine the filter to include name, and description together */
            .filter(card =>
              card.title.toLowerCase().includes(searchTerm.toLowerCase()) && /* include lower case */
              (filterRole === "" || card.description === filterRole)        /* filter by name and description */
            )
            .map((card, index) => (
              <Card key={index} title={card.title} description={card.description}  mode={mode} />
            ))
        }
      </div>

      <div className="App">
      <h1>Add a Profile</h1>
      <AddProfile onAddProfile={handleAddProfile} />
      </div> 
      
      </section> 
    </div>
  );
}


export default App
