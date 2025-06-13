import { useState, useEffect } from "react";
import axios from "axios";

import "./CurrencyConverter.css";

const CurrencyConverter = () => {
  const [rates, setRates] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    axios
      .get("https://v6.exchangerate-api.com/v6/c5fdcc6307fb7b5d3a3212e3/latest/USD")
      .then((response) => {
        console.log("Resposta da API:", response.data);
        setRates(response.data.conversion_rates);
      })
      .catch((error) => {
        console.error("Erro ao buscar as taxas de câmbio:", error);
      });
  }, []);

  useEffect(() => {
    if (rates && amount && fromCurrency && toCurrency) {
      const rateFrom = rates[fromCurrency] || 0;
      const rateTo = rates[toCurrency] || 0;

      if (rateFrom && rateTo) {
        const result = (parseFloat(amount) / rateFrom) * rateTo;
        setConvertedAmount(result.toFixed(2));
      }
    }
  }, [amount, rates, fromCurrency, toCurrency]);

  // 🔽 A renderização condicional vem só depois dos hooks!
  if (!rates) {
    return (
      <div>
        <p>Carregando moedas...</p>
        <p>Verifique o console (F12) para mensagens de erro.</p>
      </div>
    );
  }

  return (
    <div className="converter">
      <h2>Conversor de Moedas</h2>
      <input
        type="number"
        placeholder="Digite o valor..."
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <span>Selecione as moedas</span>

      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        {Object.keys(rates).map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>

      <span>para</span>

      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        {Object.keys(rates).map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>

      <h3>{convertedAmount} {toCurrency}</h3>
      <p>
        {amount} {fromCurrency} valem {convertedAmount} {toCurrency}
      </p>
    </div>
  );
};

export default CurrencyConverter;
