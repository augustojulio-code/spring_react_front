import logo from './logo.svg';
import './App.css';
import Formulario from './Formp';
import Tabela from './Tablep';
import { useEffect, useState } from 'react';

function App() {

  //UseStates
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [products, setProducts] = useState([]);


  //Useeffect faz a requisição 
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then(resp => resp.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <Formulario botao={btnCadastrar} />
      <Tabela listProducts={products} />
    </div>
  );
}

export default App;
