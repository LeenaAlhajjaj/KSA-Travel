import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/pages/Home';


function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
<Route path='/' exact Components= {Home} />

    </Switch>
    </Router>
    </>
  );
}

export default App;
