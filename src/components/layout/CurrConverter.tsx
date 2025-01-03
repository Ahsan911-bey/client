import React, { useState, useEffect } from 'react';
import { fetchCurrencies, convertCurrency } from './api'; // Import functions from the api file

const CurrConverter = () => {
  const [currencies, setCurrencies] = useState<string[]>([]); // To store the list of currencies
  const [fromCurrency, setFromCurrency] = useState<string>('USD'); // Default from currency
  const [toCurrency, setToCurrency] = useState<string>('EUR'); // Default to currency
  const [amount, setAmount] = useState<number>(1); // Amount to be converted
  const [result, setResult] = useState<number | null>(null); // Result of the conversion
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error handling state

  // Fetch available currencies when the component mounts
  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const currencyList = await fetchCurrencies(); // Use the fetchCurrencies function
        setCurrencies(currencyList); // Set currencies
      } catch (err) {
        console.error('Error fetching currencies:', err);
        setError('Failed to fetch currency list'); // Set error if API fails
      }
    };

    getCurrencies(); // Call function to fetch currencies
  }, []);

  // Handle currency conversion
  const handleConvert = async () => {
    try {
      setLoading(true); // Set loading to true
      const conversionResult = await convertCurrency(fromCurrency, toCurrency, amount); // Use the convertCurrency function
      setResult(conversionResult); // Set the result of the conversion
      setLoading(false); // Set loading to false
    } catch (err) {
      console.error('Error converting currency:', err);
      setError('Failed to convert currency'); // Set error if API fails
      setLoading(false); // Set loading to false
    }
  };

  // Render error message if there's any error
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Currency Converter</h1>

      <div className="flex flex-col space-y-4">
        {/* From Currency */}
        <div>
          <label htmlFor="from-currency" className="block text-gray-700">
            From:
          </label>
          <select
            id="from-currency"
            className="w-full p-2 border border-gray-300 rounded"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        {/* To Currency */}
        <div>
          <label htmlFor="to-currency" className="block text-gray-700">
            To:
          </label>
          <select
            id="to-currency"
            className="w-full p-2 border border-gray-300 rounded"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        {/* Amount */}
        <div>
          <label htmlFor="amount" className="block text-gray-700">
            Amount:
          </label>
          <input
            id="amount"
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        {/* Convert Button */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleConvert}
        >
          Convert
        </button>
      </div>

      {/* Loading Indicator */}
      {loading && <p className="mt-4 text-gray-700">Converting...</p>}

      {/* Result */}
      {result !== null && (
        <div className="mt-4 text-lg font-semibold text-gray-800">
          {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
        </div>
      )}
    </div>
  );
};

export default CurrConverter;
