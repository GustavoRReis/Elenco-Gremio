import React from 'react'
import './ListaSuspensa.css'

export default function ListaSuspensa({label, posicoes, valorDoEstado, dados}) {
  return (
    <div className='lista-suspensa'>
      <label>{label}</label>
      <select
      required={true}
      value={valorDoEstado}
      onChange={event => dados(event.target.value)}
      >
        {posicoes.map((i) => <option key={i}>{i}</option>)}
      </select>
    </div>
  )
}
