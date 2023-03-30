import {useEffect} from 'react'
import Login from './components/Login';
import Home from './components/Home';

function App() {



  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = "Week 2";
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        
        Week 3
      </header>
      <Home />
      {/*<Login/>*/}
    </div>
  );
}

export default App;
