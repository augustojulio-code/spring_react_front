import logo from './logo.svg';
import './App.css';
import Formulario from './Formp';
import Tabela from './Tablep';
import { useEffect, useState } from 'react';

function App() {

  const product = {
    id: 0,
    name: '',
    brand: ''
  }

  //UseStates
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [products, setProducts] = useState([]);
  const [objProduct, setObjProduct] = useState(product);


  //Useeffect request fo api list
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then(resp => resp.json())
      .then(data => setProducts(data));
  }, []);

  //Get form data
  const toType = (e) => {
    setObjProduct({ ...objProduct, [e.target.name]: e.target.value });
  }

  //insert data 
  const insertData = () => {
    fetch("http://localhost:8080/products", {
      method: 'post',
      body: JSON.stringify(objProduct),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.msg !== undefined) {
          alert(data.msg);
        }
        else {
          setProducts([...products, data]);
          alert('Produto Cadastrado');
          clearForm();
        }
      })
  }
  // update data
  const updatetData = () => {
    fetch("http://localhost:8080/products/" + objProduct.id, {
      method: 'PUT',
      body: JSON.stringify(objProduct),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.msg !== undefined) {
          alert(data.msg);
        }
        else {
          alert('Produto Alterado');

          //copy list 
          let vecTemp = [...products];
          // get lis index
          let indexList = vecTemp.findIndex((p) => {
            return p.id == objProduct.id;
          });
          //update obj from temporary list
          vecTemp[indexList] = objProduct;

          //update list 
          setProducts(vecTemp);

          clearForm();
        }
      })
  }

  //delete data 
  const deleteData = () => {
    fetch('http://localhost:8080/products/' + objProduct.id, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        alert(data.msg)
        //copy list 
        let vecTemp = [...products];
        // get lis index
        let indexList = vecTemp.findIndex((p) => {
          return p.id == objProduct.id;
        });
        //remove obj from temporary list
        vecTemp.splice(indexList, 1);

        //update list 
        setProducts(vecTemp);

        //clear form
        clearForm();
      })
  }

  const testes = () => {

    //console.log(objProduct)
  }

  // clear form
  const clearForm = () => {
    setObjProduct(product);
    setBtnCadastrar(true)
  }

  //select product
  const getProduct = (indexp) => {
    setObjProduct(products[indexp]);
    setBtnCadastrar(false);

  }

  return (
    <div>
      <Formulario botao={btnCadastrar} keyboardEvent={toType} insertd={insertData} obj={objProduct} cancel={clearForm} removeObj={deleteData} update={updatetData} />
      <Tabela listProducts={products} select={getProduct} />
    </div>
  );
}

export default App;
