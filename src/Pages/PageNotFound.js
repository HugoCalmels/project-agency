import React from 'react';
import { useLocation } from 'react-router-dom';

const PageNotFound = () => {

  let location = useLocation();

  return (
    <div>
      Sorry about that, the page {location.pathname} dosnt exist 
    </div>
  );
};

export default PageNotFound;