import React from 'react';
import './CampoDeTexto.css';

export default function CampoDeTexto({ label, placeholder, dados, valorEstado }) {

  

  const changeInputs = ({target}) => {
    dados(target.value);
  }

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
      value={valorEstado}
      onChange={changeInputs}
      required={true}
      placeholder={placeholder}
      type="text" />
    </div>
  );
}
