import axios from "axios"
import { IData } from "./interface"
import { useEffect, useState } from "react"
import React from "react"
import { toast } from "react-toastify"
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { baseApi } from "../../Services"

const Cards: React.FC<IData> = () => {
    const [cards, setCards] = useState<IData[]>([])

    const formatCurrency = (value: number): string => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value)
    }

    useEffect(() => {
        const getAll = async () => {
            try {
                const response = await axios.get(`${baseApi}/products`)
                if (response.status === 200) {
                    setCards(response.data)
                    toast.error('Bem vindo')
                } else {
                    toast.error('Ocorreu erro de requisição')
                }
            } catch (error) {
                toast.error('Erro no sistema');
            }
        }
        getAll()
    }, [cards])

    const getRemoveById = async (id: number) => {
        try {
            const response = await axios.delete(`${baseApi}/product/${id}`)
            if (response.status === 200) {
                setCards(prevCards => prevCards.filter(card => card.id !== id))
                toast.error('Excluído com sucesso')
            } else {
                window.alert('Erro ao excluir')
            }
        } catch (error) {
            toast.error('Erro no sistema')
        }
    }

    return (
        <div className="flex flex-wrap justify-start">
            {cards.map((card) => (
                <div key={card.id} className="mx-3 p-3">
                    <div className="w-56 p-6 bg-white text-black border rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 text-white h-56 flex flex-col justify-between">
                        <div>
                            <h1 className="text-center">{card.descricao}</h1>
                        </div>
                        <div className="flex flex-row items-start justify-between leading-4 mt-16">
                            <p className="text-sm text-black block mb-1">Qnt: {card.estoque}</p>
                            <p className="text-sm text-black block">R$: {formatCurrency(card.preco)}</p>
                        </div>
                        <div className="flex gap-4 items-end justify-center">
                            <FaTrash className="cursor-pointer" onClick={() => getRemoveById(card.id)} color='#E8615C' />
                            <FaEdit className="cursor-pointer" color='#A4E796' />
                        </div>
                    </div>
                </div>
            ))}
        </div>


    )
}

export default Cards