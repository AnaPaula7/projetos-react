import { ClimaInfo } from './ClimaAtualStyles';

const ClimaAtual = ({ clima }) => {
  if (!clima || !clima.weather) {
    return <p>Digite uma cidade e clique em "Buscar".</p>;
  }

  return (
    <ClimaInfo>
      <h3>{clima.name}</h3>
      <img
        src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`}
        alt={clima.weather[0].description}
      />
      <p>{clima.main.temp}ºC</p>
      <p>{clima.weather[0].description}</p>
    </ClimaInfo>
  );
};

export default ClimaAtual;