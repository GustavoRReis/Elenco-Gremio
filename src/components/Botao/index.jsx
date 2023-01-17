import React from 'react'
import './Botao.css'

export default function Botao({texto}) {

  

  return (
    <button 
    className='botao'
    >
      {texto}
    </button>
  )
}
