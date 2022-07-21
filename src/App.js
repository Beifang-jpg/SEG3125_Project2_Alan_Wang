// only F5 here
import Navbar from './Navbar';
import Home from './Home';
import SignOrCreate from './SignOrCreate';
import Community from './Community';
import Contect from './Contect';
import Get_Start_EN from './GetStart_EN';
import Ottawa from './Ottawa';
import Toronto from './Toronto';
import Montreal from './Montreal';
import Create_A from './Create_A';
import Book_homepage from './Book_homepage';
import Sign_in from './Sign_in';
import Guide from './Guide';
import Get_Start_CH from './Get_Start_CH';
import Ottawa_one from './Ottawa_one';
import Ottawa_two from './Ottawa_two';
import Toronto_one from './Toronto_one';
import Toronto_two from './Toronto_two';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { isCompositeComponent } from 'react-dom/test-utils';


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
            <Route exact path="/Get_Start_EN">
              <Get_Start_EN/>
            </Route>
            <Route exact path="/Community">
              <Community/>
            </Route>
            <Route exact path="/Guide">
              <Guide/>
            </Route>
            <Route exact path="/Ottawa_one">
              <Ottawa_one/>
            </Route>
            <Route exact path="/Ottawa_two">
              <Ottawa_two/>
            </Route>
            <Route exact path="/Toronto_one">
              <Toronto_one/>
            </Route>
            <Route exact path="/Toronto_two">
              <Toronto_two/>
            </Route>
            <Route exact path="/Get_Start_CH">
              <Get_Start_CH/>
            </Route>
            <Route exact path="/Contect">
              <Contect/>
            </Route>
            <Route exact path="/Ottawa">
              <Ottawa/>
            </Route>
            <Route exact path="/Toronto">
              <Toronto/>
            </Route>
            <Route exact path="/Montreal">
              <Montreal/>
            </Route>
            <Route exact path="/Create_A">
              <Create_A/>
            </Route>
            <Route exact path="/Sign_in">
              <Sign_in/>
            </Route>
            <Route exact path="/Book_homepage">
              <Book_homepage/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
