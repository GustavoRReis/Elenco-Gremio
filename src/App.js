
import { useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Posicao from './components/Posicao';

function App() {

  const [jogadores, setJogadores] = useState([]);

  const posicoes = ['Goleiro', 'Zagueiro', 'Lateral', 'Meio-Campo', 'Atacante'];

  const addJogadores = (jogador) => {
    setJogadores([...jogadores, jogador])
    console.log(jogadores)
  };


  return (
    <div>
      <Header />
      <Formulario jogadoresCadastrados={(jogador) => addJogadores(jogador)} />
      {posicoes.map((e) => (
        <Posicao
          id="teste"
          key={e}
          nome={e}
          jogadores={jogadores.filter((i) => e === i.posicao)}
        />
      ))}
    </div>
  );
}

export default App;
