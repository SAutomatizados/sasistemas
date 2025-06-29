    import './card.css';

export default function Card(props){

    return(
        
    <div className="card">
        <div>
            <h3>Serviços</h3>
        </div>
            
      <img className="img"src={props.imagem} alt=""/>
      <span className='titulo'>{props.titulo}</span>
      <div>
        
      </div>
      <a href="">Detalhes</a>
      


    </div>

        
       
    )
}