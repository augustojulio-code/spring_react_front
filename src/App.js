import logo from './logo.svg';
import './App.css';
import Formulario from './Formp';
import Tabela from './Tablep';
import { useState } from 'react';

function App() {

  const [btnCadastrar, setBtnCadastrar] = useState(true);

  return (
    <div>
      <Formulario botao={btnCadastrar} />
      <Tabela />
    </div>
  );
}

export default App;
