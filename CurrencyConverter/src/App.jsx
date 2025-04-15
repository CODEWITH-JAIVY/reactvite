import { useState } from 'react';
import useCurrencyInfo from './Hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');

  const currencyRates = useCurrencyInfo(from);
  const converted = currencyRates[to] ? (amount * currencyRates[to]).toFixed(2) : '...';

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
      <div className="bg-white text-black w-full max-w-md sm:max-w-lg p-6 rounded-xl shadow-xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">💱 Currency Converter</h1>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* FROM / TO section */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:gap-4 mb-4">
          <div className="flex-1 mb-4 sm:mb-0">
            <label className="block mb-1 font-medium">From</label>
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {Object.keys(currencyRates).map((curr) => (
                <option key={curr} value={curr}>{curr}</option>
              ))}
            </select>
          </div>

          <div className="flex justify-center sm:items-center mb-4 sm:mb-0">
            <button
              onClick={handleSwap}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-md"
            >
              🔄
            </button>
          </div>

          <div className="flex-1">
            <label className="block mb-1 font-medium">To</label>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {Object.keys(currencyRates).map((curr) => (
                <option key={curr} value={curr}>{curr}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="text-center text-xl font-semibold mt-4">
          Converted: <span className="text-green-600">{converted} {to}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
