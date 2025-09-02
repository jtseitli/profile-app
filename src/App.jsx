import './App.css'
import Header from './Header'
import Introduction from './Introduction'
import Card from './Card'

function App() {
  return (
    <div className="app">
      <Header />
      <Introduction />
      <div className="card-container">
        <Card title="Project 1" description="This is my first project." />
        <Card title="Project 2" description="This is my second project." />
        <Card title="Project 3" description="This is my third project." />
      </div>
    </div>
  )
}

export default App
