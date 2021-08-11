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
  <div className="works">
    <ReactMarkdown children={input} />

    {clients.map((client) => (
      <div key={client.id}>
     
     <div class="container" >
  <div class="row justify-content-md-center">

    <div class="col col-lg-1">
     
    </div>
    <div class="col col-lg-10">
     
    <div class="card-body">
    <h5 class="card-title">{client.name}</h5>
   
    <p class="card-text">Viendez découvrir le travail de {client.name}</p>
    <Link to={"/works/" + client.name + "-study-case"}><button type="button" className="btn btn-primary">
          Projects
     </button></Link>
 
</div>

    </div>
    <div class="col col-lg-1">
     
    </div>


  </div>
</div>

      </div>  
    ))}
  
  </div>
);
};

export default Works;

