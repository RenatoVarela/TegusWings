import './App.css';
import {
    useFirebaseApp
}from 'reactfire'

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);
  return (
    <div className="App">
      
      <header className="App-header">
        <img src="https://i.ibb.co/1Qtsr7G/Tegus-Wings-Logo.jpg" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
