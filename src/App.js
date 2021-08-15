import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Background from './components/Background';
import Browse from './components/Browse';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {

  return (
    <div className="App">

      <Router>
        <Navbar />
        <Background />
        <Switch>
          <Route exact path="/admin" component={Admin}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/browse" component={Browse}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
