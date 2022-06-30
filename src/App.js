// This is the root
import Navbar from './Navbar';
import Home from './Home';
import SignOrCreate from './SignOrCreate';
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
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
