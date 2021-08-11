import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Works from './Pages/Works';
import PageNotFound from './Pages/PageNotFound';
import StudyCase from './Pages/StudyCase';

function App() {
  return (
  <>
  <Router>
    <div style={{width: 100 + "vw", height: 80, backgroundColor: "lightblue"}}>

      <Link to="/" style={{margin: 50}}>Home</Link>
      <Link to="/works" style={{margin: 50}}>Projets</Link>
      <Link to="/about" >L'agence</Link>
    
    </div>
    <Switch>
     
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/works" exact component={Works} />
      <Route path="/works/:name-:category" exact component={StudyCase} />
      <Route path="*" exact component={PageNotFound} />
   
    </Switch>
  </Router>
  </>
  )
}

export default App;
