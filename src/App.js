import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Background from './components/Background';
import Browse from './components/Browse';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Background />
        <Switch>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/browse" component={Browse}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
