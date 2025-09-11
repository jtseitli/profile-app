import './App.css'
import Header from './components/Header.jsx'
import Introduction from './components/Introduction.jsx'
import Card from './components/Card.jsx'
import { useState } from 'react';




function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");


  const cards = [
    { title: "John Doe", description: "Web Developer" },
    { title: "Joshua Tseitlin", description: "UX Designer" },
    { title: "Ava Smith", description: "UI Designer" },
  ];
  
  return (
    <div className="app">
      <Header />

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
        {cards 
            .filter(card =>
              card.title.toLowerCase().includes(searchTerm.toLowerCase()) && /* filter by name */
              (filterRole === "" || card.description === filterRole)        /* filter by description */
            )
            .map((card, index) => (
              <Card key={index} title={card.title} description={card.description} />
            ))
        }
      </div>
      </section>

    </div>
  );
}


export default App
