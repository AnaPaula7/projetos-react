import React from 'react';
import { PrevisaoContainer } from './PrevisaoStyles';

const Previsao = ({ previsoes }) => {
  return (
    <PrevisaoContainer>
      <h4>Previsão para as próximas horas</h4>
      <ul>
        {previsoes.map((previsao, index) => (
          <li key={index}>
            <p>{previsao.dt_txt}</p>
            <img
              src={`http://openweathermap.org/img/wn/${previsao.weather[0].icon}@2x.png`}
              alt={previsao.weather[0].description}
            />
            <p>{previsao.main.temp}ºC - {previsao.weather[0].description}</p>
          </li>
        ))}
      </ul>
    </PrevisaoContainer>
  );
};

export default Previsao;