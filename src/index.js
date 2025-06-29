import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './Contato';
import Suporte from './Suporte';
import Servicos from './Servicos';
import Cabecalho from './components/Cabecalho';
import Form from './components/Form';
import Rodape from './components/rodape';
import Card from './components/card';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
       <Route path='/contato' element={<Contato/>}/>
        <Route path='/servicos' element={<Servicos/>}/>
         <Route path='/suporte' element={<Suporte/>}/>
         <Route path='/cabecalho' element={<Cabecalho/>}/>
         <Route path='/card' element={<Card/>}/>
         <Route path='/rodape' element={<Rodape/>}/>
         <Route path='/form' element={<Form/>}/>

   
         
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);


