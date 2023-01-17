import React from 'react';
import { useState } from 'react';
import Botao from '../Botao';
import CampoDeTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

export default function Formulario({ jogadoresCadastrados }) {
  const [nome, setNome] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [imagem, setImagem] = useState('');
  const [posicao, setPosicao] = useState('');

  const posicoesForm = ['Goleiro', 'Zagueiro', 'Lateral', 'Meio-Campo', 'Atacante'];

  const submitButton = (e) => {
    e.preventDefault();
    jogadoresCadastrados({
      nome,
      nacionalidade,
      imagem,
      posicao
    })
  };

  return (
    <section className="formulario">
      <form onSubmit={submitButton}>
        <h2> Preencha os dados para cadastrar o jogador</h2>
        <CampoDeTexto
          label="Nome"
          placeholder="Digite seu nome..."
          valorEstado={nome}
          dados={(valor) => setNome(valor)}
        />
        <CampoDeTexto
          label="Nacionalidade"
          placeholder="Digite sua nacionalidade..."
          valorEstado={nacionalidade}
          dados={(valor) => setNacionalidade(valor)}
        />
        <CampoDeTexto
          label="Imagem"
          placeholder="Insira a Url da imagem do jogador..."
          valorEstado={imagem}
          dados={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          label="Posição"
          posicoes={posicoesForm}
          valorEstado={posicao}
          dados={(valor) => setPosicao(valor)}
        />
        <Botao texto="Adicionar jogador" />
      </form>
    </section>
  );
}
