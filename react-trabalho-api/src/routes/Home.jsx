import productFetch from "../axios/config";

import { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import "./Home.css"

const Home = () => {

  const [products, setProducts] = useState ([])

  const getProducts = async() => {
    
    try {
      
      const response = await productFetch.get("/products")
      
       const data = response.data;

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
      <h1>Adicionados Recentemente</h1>
      {products.length === 0 ? ( 
        <p>Carregando Produtos...</p>
      ) : (
        products.map((product) =>  (
          <div className="product" key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div className="images">
              <img src={product.thumbnail}/>
            </div>
            <Link to={'/products/${product.id}'} className="btn">Ler mais</Link>

          </div>
        ))
      )}
    </div>
  )
}

export default Home