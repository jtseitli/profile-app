import './App.css'
import Header from './components/Header.jsx'
import Introduction from './components/Introduction.jsx'
import Card from './components/Card.jsx'



function App() {
  const cards = [
    { title: "Project 1", description: "This is my first project." },
    { title: "Project 2", description: "This is my second project." },
    { title: "Project 3", description: "This is my third project." },
  ];
  
  return (
    <div className="app">
      <Header />
      <Introduction />
      <div className="card-container">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
}


export default App
