
import { useRef, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { useClick } from '../useClick';


export default function Cabecalho() {
  const DropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)




  return (
    <div className="container">
      <div>
      <img className='logo'
      
       src='./logo sa.png' />
     </div>

     <div className='menu-container'>
      <button onClick={onClick}  className='menu-button'>
        <span>Menu</span>
        <img 
        width="20px"
        height="20px"
        src='data:image/webp;base64,UklGRroBAABXRUJQVlA4IK4BAACQFQCdASrGAMYAPp1OoUulpKMhp/JIALATiWlu4XPxG/OXdV3QJUEMs8ZWanvqopykzouHVrGGInZSZ0XDq1jDETsoGclFVqdJ2zYYidG3mr7pS/HhqSfIfKRMb1cUn+4/m808kKHREfULKTIqrDaOgw4z6SoWhoKAhDFzosBN/6wr1Wp4LKfOQIdsT6hRROOxuLuYOz4SsaxO+coIsXDq1jDETspM6Lh1axhiJ2UmdFw6tYQAAP7/BkAFsGNflE6Jvxe1b5HRglfjzVTx2o82kSwDgcAPqikGJZhzJTeY0rWy1WGFsHFVWXiSPy/wmThBee6TyCwK+/L07t7k7kIgn4ZMe0cS5YKftR/4u02a1sAuP6otr0t10IdHWsU/SYazGwnb2CxHmNIaZOzzvZ1nPv9g93wLvpMkkR6JUG3PGy2HEEkMRxnUVrY8ewr/VsKGvKOhqJRBNDr5aAQjfXN7h8z/wrvKLfHpFTV7A8TGKyfYD3hX/KJraH2lUPLS64TSt3C/ZBb5oVh8sI0gWMafIOsSffBIxIZmiVMaoNfRTYWVxHY7gcxK4gAAAAAA'
        alt='Menu'
        />

      </button>
      <nav 
        ref={DropDownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <ul className='ul' >
          <li className='lost'> 
           <Link className='link'to='/contato' >Contato</Link>
          </li>
          <li>
            <Link className='link' to='/suporte'>Projetos Realizados</Link>
          </li>
          <li>
            <Link className='link' to='/servicos'>Serviços</Link>
            </li>
            <li>
            <Link className='link' to='/'>SA</Link>
          </li>
        </ul>
      </nav>
       

     </div>
     

    
    
     
    </div>
  );
}

