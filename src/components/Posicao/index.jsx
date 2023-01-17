import React from 'react';
import Jogador from '../Jogador';
import './Posicao.css';

export default function Posicao({ nome, jogadores }) {
  return (
    <section className="posicao">
      {<h3>{nome}</h3>}
      <div className='jogadores'>
        {jogadores.map((e) => (
          <Jogador
            nome={e.nome}
            nacionalidade={e.nacionalidade}
            imagem={e.imagem}
          />
        ))}
      </div>
    </section>
  );
}
