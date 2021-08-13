import './App.scss';
import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Works from './Pages/Works';
import PageNotFound from './Pages/PageNotFound';
import StudyCase from './Pages/StudyCase';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from './Components/Themes';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from './Components/Logo';

const body = document.body;
const StyledApp = styled.div`

  color: ${props => props.theme.fontColor}

`;

function App() {

  

  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === 'light' ? setTheme("dark") : setTheme("light");
  }
 



  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} >
      <GlobalStyles />
  <StyledApp>
  <Router>
    

    <div className="navbar">
        
    <div class="col-1"></div>
  
<div class="col-4 d-flex justify-content-start align-space-between">
  <Link className="linksNavbar" to="/" style={{margin: 10}}>
    <button type="button" className="buttonStyle">
      Home
    </button>
  </Link>
  <Link className="linksNavbar" to="/works"style={{margin: 10}}>
    <button type="button" className="buttonStyle">
      Projets
    </button>
  </Link>
  <Link className="linksNavbar" to="/about" style={{margin:10}}>
    <button type="button" className="buttonStyle">
      L'agence
    </button></Link>
</div>
<div class="col-6"  align="end" >
  <button onClick={() => themeToggler()}className="buttonStyle" >Change Theme</button>
</div>

<div class="col-1"></div>
<Logo />
    </div>

    <div className="main">
    <Switch>
     
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/works" exact component={Works} />
      <Route path="/works/:name-study-case" exact component={StudyCase} />
      <Route path="*" exact component={PageNotFound} />
   
    </Switch>
    </div>
    
  </Router>
  </StyledApp>
  </ThemeProvider>
  )
}

export default App;

