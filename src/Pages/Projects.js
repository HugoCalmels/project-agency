import React from 'react';
import {useHistory} from 'react-router-dom';

const Projects = () => {

  let history = useHistory()

return (
  <div>
    This is the projects page
    <button 
    onClick={() => { 
      history.push('/about');
      console.log(history);
      }}
    >     
    Go to the About Page
    </button>
  </div>
);
};

export default Projects;


