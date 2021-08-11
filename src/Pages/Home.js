import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const Home = () => {

  const input = `### Confiez vos rêves à des experts du Web

  Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.  
  Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.`

  return (
    <div className="home">
      <ReactMarkdown children={input} />
    </div>
  );
};

export default Home;