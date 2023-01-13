import './App.css';

function App() {
  const title = 'Welcome to your Med Scheduler!';
  const likes = 50;
  const link = "https://www.mayoclinic.org/diseases-conditions"

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <a href="{ link }">Did you know?</a>
      </div>
    </div>
  );
}

export default App;
