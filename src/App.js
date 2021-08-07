import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Background from './components/Background';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Background />

      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
