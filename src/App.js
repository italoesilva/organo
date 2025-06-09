import { useState } from 'react';
import Banner from './componentes/Banner/Banner';

import Formulario from './componentes/Formularios';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)


  }


  return (
    <div className="App">
      
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => 
      aoNovoColaboradorAdicionado(colaborador)}/>
  

    </div>
  );
}

export default App;
