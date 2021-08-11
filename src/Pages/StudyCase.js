import { useParams } from 'react-router-dom';
import { clients } from './../Components/Details';
import ReactMarkdown from 'react-markdown';

const StudyCase = () => {

  let {name} = useParams()
  console.log(name) 

  const foundClient = clients.find((e) => {
    return e.name === name
  })
  console.log(foundClient) 
  
  return (
      <div><ReactMarkdown children={foundClient.content} /></div>
    )
  }
  
export default StudyCase;