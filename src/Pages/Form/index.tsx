import axios from 'axios'
import React from 'react'
import { useState } from "react"
import { baseApi } from '../../Services'
import { Form } from './style'
import { Input } from '../../components/InputText/style'
import { Button } from '../../components/Button/style'
import { Label } from '../../components/Label/style'

const Formulario = () => {
  const [products, setProducts] = useState([])
  const [descricao, setDescricao] = useState("")
  const [estoque, setEstoque] = useState("")
  const [preco, setPreco] = useState("")
  console.log(products)

  const postProduct = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/product`, {
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
    <div className="flex items-center justify-center justify-items-center h-screen bg-black ml-96">
      <Form onSubmit={postProduct}>
        <div className="mb-5">
          <Label htmlFor="descricao">
            Descrição
          </Label>
          <Input
            type="text"
            id="descricao"
            placeholder="Descrição"
            required value={descricao} onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <Label htmlFor="estoque">
            Qnt. Estoque
          </Label>
          <Input
            type="text"
            id="estoque"
            placeholder="Quantidade em Estoque"
            required value={estoque} onChange={(e) => setEstoque(e.target.value)}
          />
          <Label htmlFor="preco">
            Preço R$:
          </Label>
          <Input
            type="text"
            id="preco"
            placeholder="Preço"
            required 
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>
        <Button type="submit">
          Cadastrar
        </Button>
      </Form>
    </div>
  )
}

export default Formulario
