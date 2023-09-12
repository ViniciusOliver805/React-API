import productFetch from "../axios/config";

import { useState } from "react";

import {useNavigate } from "react-router-dom";

import "./NewProduct.css"

import Filter from "../components/Filter"; // Importe o componente Filter
import ImageUpload from "../components/ImageUpload"; // Importe o componente Filter
import ImageProduct from "../components/ImageProduct"; // Importe o componente Filter


const NewProduct = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [description, setDescription] = useState()

  const createProduct = async (e) => {
    e.preventDefault();

    const product = {title, description, id: 101 }

    await productFetch.post("/products/add", {
      body: product,
    })
    navigate("/")
  }

  return (<div className='new-product'>
    <h2>Cadastrando novo produto:</h2>
    <form onSubmit={(e) => createProduct(e)}>
      <div className="form-control">
        <label htmlFor="title">Título:</label>
        <input 
          type="text" 
          name="title" 
          id="title" 
          placeholder='Digite o título'
          onChange={(e) => setTitle(e.target.value)} 
        />
      </div>
      <div className="form-control">
        <label htmlFor="description">Descrição:</label>
        <textarea 
          name="descricao" 
          id="descricao" 
          placeholder='Digite a descrição do produto' 
          onChange={(e) => setDescription(e.target.value)} 

        ></textarea>
      </div>
      <div className="form-control">
        <label htmlFor="price">Preço:</label>
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          min="0" 
          max="100"
          id="price" 
          placeholder='Digite o preço do produto' 
        />
      </div>
      <div className="form-control">
        <label htmlFor="discountPercentage">Desconto:</label>
        <input 
          type="number" 
          name="discountPercentage" 
          step="1" 
          min="0" 
          max="100"
          id="discountPercentage" 
          placeholder='Digite a procentagem de desconto do produto' 
        />
      </div>
      <div className="form-control">
        <label htmlFor="stock">Estoque:</label>
        <input 
          type="number" 
          name="stock" 
          id="stock" 
          placeholder='Digite a quantidade de estoque' 
        />
      </div>
      <div className="form-control">
        <label htmlFor="brand">Marca:</label>
        <input 
          type="text" 
          name="brand" 
          id="brand" 
          placeholder='Digite a marca do produto ' 
        />
      </div>
      <Filter />
      <ImageUpload />
      <ImageProduct />
      <input type="submit" value="Cadastrar Produto" className='btn' />
      
      
    </form>

  </div>
  )
}

export default NewProduct