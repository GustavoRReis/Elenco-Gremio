import React from 'react';
import './Jogador.css';

export default function Jogador({nome, nacionalidade, imagem}) {
  return (
    <div className='jogador'>
      <div className='cabecalho'>
        <img
          src={imagem}
          alt={nome}
        />
      </div>

      <div className='rodape'>
        <h4>{nome}</h4>
        <h4>{nacionalidade}</h4>
      </div>
    </div>
  );
}
