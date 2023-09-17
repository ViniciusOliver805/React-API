import productFetch from "../axios/config";

import { useEffect, useState } from "react";



import { Link } from "react-router-dom";

import Navbar from '../components/Navbar';


import "./Home.css";

const Home = () => {

  const [products, setProducts] = useState([])


  const getProducts = async () => {

    try {

      const response = await productFetch.get("/products")

      const data = response.data;
      console.log(data); // Aqui você verá os dados no console

      setProducts(data.products)

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {

    getProducts()

  }, [])

  return (
    <div className="home">
      <Navbar />

      <h1>Adicionados Recentemente</h1>

      {products.length === 0 ? (
        <p>Carregando Produtos...</p>
      ) : (
        products.map((products) => (
          <div className="product" key={products.id}>
            
            <h2>{products.title}</h2>
            <p>{products.description}</p>
            <div className="images">
              <img src={products.thumbnail} />
            </div>
            <Link to={'/products/${product.id}'} className="btn">Ler mais</Link>

          </div>
        ))
      )}
    </div>
  )
}

export default Home