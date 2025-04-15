import { useEffect, useState } from 'react';

const useCurrencyInfo = (fromCurrency) => {
  const [currencyData, setCurrencyData] = useState({});

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const res = await fetch(`https://api.frankfurter.app/latest?from=${fromCurrency}`);
        const data = await res.json();
        setCurrencyData(data.rates);
      } catch (err) {
        console.error("API Error:", err);
      }
    };

    if (fromCurrency) {
      fetchCurrencyRates();
    }
  }, [fromCurrency]);

  return currencyData;
};

export default useCurrencyInfo;
