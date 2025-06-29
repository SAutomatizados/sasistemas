import Cabecalho from "./components/Cabecalho";
import './App.css'
import Rodape from "./components/rodape";
import Form from "./components/Form";






export default function Contato() {
 

  return (
    <div>
      <div>
          <Cabecalho/>

      </div>

      <div className="contato">
        <h2>Atendimento</h2>
        <p>Mande sua Solicitação</p>
        <p>Formular8io</p>
    </div>

 
      
    <div>
         <Rodape/>
   
   
      
    </div>
   

    

    </div>

  )
}