// This is the root
import Navbar from './Navbar';
import Home from './Home';
import SignOrCreate from './SignOrCreate';
import Community from './Community';
import Contect from './Contect';
import Get_Start from './GetStart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/SignOrCreate">
              <SignOrCreate/>
            </Route>
            <Route exact path="/Get_Start">
              <Get_Start/>
            </Route>
            <Route exact path="/Community">
              <Community/>
            </Route>
            <Route exact path="/Contect">
              <Contect/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
