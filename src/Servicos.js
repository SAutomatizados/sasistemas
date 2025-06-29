import Card from "./components/card";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/rodape";


import './Servicos.css'

export default function Servicos() {
 

  return (
 <div>
  <div>
    <Cabecalho/>

  </div>
      <div className="server">
 
      <Card titulo="Sistemas Web" 
      imagem="https://tse3.mm.bing.net/th/id/OIP.fPLZ_zmmiyBxc6Ey09Pg2wHaEK?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
      />

     <Card titulo="Manutenção" 
      imagem="https://th.bing.com/th/id/R.1186521f102413c4bdc91b37e653fb28?rik=3cB6xhlg%2fkMK1Q&pid=ImgRaw&r=0&sres=1&sresct=1"/>
     
    <Card titulo="Serviços Digitais " 
      imagem="https://th.bing.com/th/id/R.9e8df7978a9de37a42493d11f842699a?rik=fWdYcFV0N2748A&riu=http%3a%2f%2fwgsistemas.com.br%2fwp-content%2fuploads%2f2015%2f03%2fmidia.png&ehk=eNKziV3auDt%2ffdxuXOi8Sgm02rL3Q%2fQVtNLLUSf%2fnLw%3d&risl=&pid=ImgRaw&r=0"
      />
    
    </div>
    <div>
        <Rodape/>

    </div>
  
   
    
     
    </div>
   

    
 
   

  )
}