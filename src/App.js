import logo from './logo.svg';
import './App.css';
import Formulario from './Formp';
import Tabela from './Tablep';
import { useEffect, useState } from 'react';

function App() {

  const product = {
    cod: 0,
    name: '',
    brand: ''
  }

  //UseStates
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [products, setProducts] = useState([]);
  const [objProduct, setObjProduct] = useState(product);


  //Useeffect request fo api
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then(resp => resp.json())
      .then(data => setProducts(data));
  }, []);

  //Get form data
  const toType = (e) => {
    setObjProduct({ ...objProduct, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <p>{JSON.stringify(objProduct)}</p>
      <Formulario botao={btnCadastrar} keyboardEvent={toType} />
      <Tabela listProducts={products} />
    </div>
  );
}

export default App;
