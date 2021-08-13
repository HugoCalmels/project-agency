import { useParams, useHistory } from 'react-router-dom';
import { clients } from './../Components/Details';
import ReactMarkdown from 'react-markdown';


const StudyCase = () => {

  let {name} = useParams()
  console.log(name) 

  const foundClient = clients.find((e) => {
    return e.name === name
  })
  console.log(foundClient) 
  
  const input = `### L'étude de cas de : ___**${foundClient.name}**___`

  let history = useHistory()

  return (
    <div className="study-case">
      <ReactMarkdown children={input} />
      <div class="container">
        <div class="row justify-content-md-center">

          <div class="col col-lg-1">
          </div>

        <div class="col col-lg-10">
          <div class="card-body">
          <p class="card-text"><ReactMarkdown children={foundClient.content} /></p>
          <button type="button" className="buttonStyleSmall"
            onClick={() => { 
              history.push('/works');
              console.log(history);
            }}
          >     
            Retour
          </button>
          </div>
        </div>

      <div class="col col-lg-1">
      </div>

    </div>
  </div>
</div>
    )
  }
  
export default StudyCase;

