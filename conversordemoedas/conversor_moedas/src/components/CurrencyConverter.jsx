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
            .get(
                "https://v6.exchangerate-api.com/v6/c5fdcc6307fb7b5d3a3212e3/latest/USD"
            )
            .then((response) => {
                setRates(response.data.conversion_rates);      
            }).catch((error) => {
                console.log("Ocorreu um erro", error);
            });
    }, []);

  return (
    <div className="converter">
        <h2>Conversor de Moedas</h2>
        <input type="number" placeholder="Digite o valor..." value={amount}/>
        <span>Selecione as moedas</span>
        <select>
            <option value="BRL">BRL</option>
        </select>
        <span>para</span>
        <select>
            <option value="USD">USD</option>
        </select>
        <h3>{convertedAmount} {toCurrency}</h3>
        <p>
            {amount} {fromCurrency} valem {convertedAmount} {toCurrency}
        </p>
    </div>
  )
}

export default CurrencyConverter