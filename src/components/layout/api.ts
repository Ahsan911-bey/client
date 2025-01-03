import axios from 'axios';

const API_BASE_URL = 'https://v6.exchangerate-api.com/v6/dbc334b2bc2c0354d17109a2';

// Function to fetch available currencies
export const fetchCurrencies = async (): Promise<string[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/latest/USD`);
    return Object.keys(response.data.conversion_rates);
  } catch (error) {
    console.error('Error fetching currencies:', error);
    throw new Error('Failed to fetch currency list');
  }
};

// Function to convert currency
export const convertCurrency = async (
  fromCurrency: string,
  toCurrency: string,
  amount: number
): Promise<number> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/pair/${fromCurrency}/${toCurrency}/${amount}`
    );
    return response.data.conversion_result;
  } catch (error) {
    console.error('Error converting currency:', error);
    throw new Error('Failed to convert currency');
  }
};
