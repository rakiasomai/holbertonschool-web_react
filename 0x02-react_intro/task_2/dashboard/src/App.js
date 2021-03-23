import './App.css';
import logo from "./Holberton_Logo.jpeg"
import { getFooterCopy, getFullYear } from './utils';

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
        <form>
          <label htmlFor="email"> Email: </label> 
          <input type="email" id = "email" />
          <label htmlFor="password"> Password: </label>
          <input type="password" id= "password" />
          <button>OK</button>
        </form>
        </body>
      </div>

      <div className="App-footer">
        <footer>

        <p> Copyright {getFullYear()} - {getFooterCopy(true)} </p>
        </footer>
      </div>

    </div>

  );
}

export default App;
