import './App.css';
import logo from "./Holberton_Logo.jpeg"

function App() {
  return (
    <div className="App">
    
      <div className="App-header">
        <header>
        {<img src={logo} alt=""/>}
        <h1> School dashbord </h1>  
        </header>
      </div>
      <body>
      <div className="App-body">
        <p> Login to access the full dashbord </p>
      </div>
      </body>

      <div className="App-footer">
        <footer>
        <p> Copyright 2020 - holberton School </p>
        </footer>
      </div>

    </div>

  );
  
}

export default App;
