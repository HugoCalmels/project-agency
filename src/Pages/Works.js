import React from 'react';
import {useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { clients } from './../Components/Details';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

/*
<a href={ "/projects/" + studyCases[0].name }>{studyCases[0].name }</a>
 <h1>This is the PROJECTS page.{studyCases[0].name}</h1>
  let history = useHistory()

<button 
    onClick={() => { 
      history.push('/about');
      console.log(history);
      }}
    >     
    Go to the About Page
    </button>
*/
const Works = () => {

  const input =  `### Au fil des années, nous avons pu accompagner les meilleurs.

  Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.`;

return (
  <div>
    <ReactMarkdown children={input} />

    {clients.map((client) => (
      <div key={client.id}>
        <Link to={"/works/" + client.name + "-" + client.category}>Projet de : {client.name}</Link>
      </div>  
    ))}
  
  </div>
);
};

export default Works;