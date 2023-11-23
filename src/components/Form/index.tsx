import axios from 'axios'
import React from 'react'
import { useState } from "react"

const Form = () => {
  const [products, setProducts] = useState([])
  const [descricao, setDescricao] = useState("")
  const [estoque, setEstoque] = useState("")
  const [preco, setPreco] = useState("")
  console.log(products)
  const postProduct = async (e: React.FormEvent) => {
    e.preventDefault() 

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/product", {
        descricao: descricao,
        estoque: estoque,
        preco: preco
      })

      setProducts(response.data)
      
      setDescricao("")
      setEstoque("")
      setPreco("")
    } catch (error) {
      console.error("Error posting product:", error)
    }
  }

return (
  <div className="flex items-center justify-center h-screen bg-black">
      <form
        className="max-w-md mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 text-white"
        onSubmit={postProduct}
      >
      <div className="mb-5">
        <label htmlFor="descricao" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Descrição
        </label>
        <input
          type="text"
          id="descricao"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Descrição"
          required value={descricao} onChange={(e) => setDescricao(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="estoque" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Qnt. Estoque
        </label>
        <input
          type="text"
          id="estoque"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
          placeholder="Quantidade em Estoque"
          required value={estoque} onChange={(e) => setEstoque(e.target.value)}
        />
        <label htmlFor="preco" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Preço R$:
        </label>
        <input
          type="text"
          id="preco"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Preço"
          required value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  </div>
)
}

export default Form
