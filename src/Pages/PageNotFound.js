import React from 'react';
import { useLocation } from 'react-router-dom';

const PageNotFound = () => {

  let location = useLocation();

  return (
    <div>
      Désolé, la page {location.pathname} n'existe pas.
    </div>
  );
};

export default PageNotFound;