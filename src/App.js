import { useState } from 'react';
import Banner from './componentes/Banner/Banner';

import Formulario from './componentes/Formularios';
import Time from './componentes/Time';

function App() {

  const times = [
  {
    nome: 'Programação',
    corPrimaria: '#57C278',
    corSecundaria: '#D9F7E9'
  },  
    {
    nome: 'Front-End',
    corPrimaria: '#B2CFFA',
    corSecundaria: '#E8F8FF'
  },   
    {
    nome: 'Data-Science',
    corPrimaria: '#A6O157',
    corSecundaria: '#F0F8E2'
  },   
    {
    nome: 'DevOps',
    corPrimaria: '#E06BB9',
    corSecundaria: '#FDE7E8'
  },   
    {
    nome: 'UK e Designs',
    corPrimaria: '#DB6EBF',
    corSecundaria: '#FAE9F5'
  },   
    {
    nome: 'Mobile',
    corPrimaria: '#FFBA05',
    corSecundaria: '#FFF5D9'
  },   
    {
    nome: 'Inovação e Gestão',
    corPrimaria: '#F88A29',
    corSecundaria: '#FFEEDF'
  }   
  ]


  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])


  }


  return (
    <div className="App">
      
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => 
      aoNovoColaboradorAdicionado(colaborador)}/>
      

      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)} 
    </div>
  );
}

export default App;
