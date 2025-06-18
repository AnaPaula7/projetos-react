import React from 'react'
import "./BuscaStyles";
import { BuscaCidade, BuscaContainer, BotaoBuscar } from './BuscaStyles';

const Busca = ({cidade, setCidade, buscarClima}) => {
  return (
    <BuscaContainer>
          <BuscaCidade 
            type="text" 
            value={cidade}
            onChange={(e) => setCidade(e.target.value)} 
            placeholder='Digite uma cidade...'
          />
          <BotaoBuscar onClick={buscarClima}>Buscar</BotaoBuscar>
    </BuscaContainer>
  )
}

export default Busca