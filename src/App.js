import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import Places from './Components/pages/Places';
import About from './Components/pages/About';


function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
           <Route path='/' exact component= {Home} />
           <Route path='/places' exact component= {Places} />
           <Route path='/about' exact component= {About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
