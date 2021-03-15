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

      <div className="App-body">
        <body>
        <p> Login to access the full dashbord </p>
        </body>
      </div>

      <div className="App-footer">
        <footer>
        <p> Copyright 2020 - holberton School </p>
        </footer>
      </div>

    </div>

  );
  
}

export default App;
