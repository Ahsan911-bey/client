import axios from 'axios';

const API_BASE_URL = 'https://v6.exchangerate-api.com/v6/dbc334b2bc2c0354d17109a2';

export const fetchCurrencies= async() => {
    try{
        const response = await axios.get(`${API_BASE_URL}/latest/USD`);
        return Object.keys(response.data.conversion_rates);
    }
    catch (error){
        console.error('Error fetching Currencies', error);
        throw new Error('Failed to Fetch currency List');
    }
};

export const convertCurrency= async(
    fromCurrency: string,
    toCurrency: string,
    amount: number
)=> {
    try{
        const Response= await axios.get(
            `${API_BASE_URL}/pair/${fromCurrency}/${toCurrency}/${amount}`
        );
        return Response.data.conversion_result;
    }
    catch{
        console.error('There is an error converting the currency',Error);
    }
};