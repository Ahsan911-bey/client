import React,{useState,useEffect} from 'react';
import { fetchCurrencies,convertCurrency } from './api';

const CurrConverter = () => {
    const [currencies , setCurrencies] = useState<string[]>([]);
    const [fromCurrency, setFromCurrency] = useState<string>('USD');
    const [toCurrency, setToCurrency] = useState<string>('EUR');
    const [amount, setAmount] = useState<number>(1);
    const [result, setResult] = useState<number | null>(null);
    const [error , setError] = useState<null | string>(null);
    const [loading , setLoading] = useState(false);


useEffect(() =>{
    const getCurrencies = async() =>{
        try{
            const currencyList= await fetchCurrencies();
            setCurrencies(currencyList);
        }
        catch{
            console.error('There is an error fetching data', error);
            setError('There is an error');
        }
    }
    getCurrencies();
}, []);

const convertHandler = async() =>{
    try{
        setLoading(true);
        const Converted= await convertCurrency(fromCurrency,toCurrency,amount);
        setResult(Converted);
        setLoading(false);
    }
    catch{
        console.error('Error converting',error);
        setError('error converting');
    }
};

    if(error) return <div>{error}</div>;
    return(
        <div className='flex flex-row justify-center items-center h-screen bg-[#3a3a3c]'>
            <div className="relative pr-80">
          <img 
            src="https://finbok.com/wp-content/uploads/sites/9/2024/03/stock-market-trading-march-2024-1-scaled.jpg" 
            alt="Decorative" 
            className="h-5/6 w-96 object-cover rounded-xl" 
          />
        </div>
            <div className='h-5/6 w-1/4 rounded-3xl flex flex-col items-center justify-center bg-[#1f1f1f]'>
            <h1 className=' text-4xl text-blue-800 mb-5 text-left pr-48 pb-10'>Currency <br />Converter</h1>
            
                <div>
               <div className='flex flex-col'>
                    <label
                        htmlFor='FromCurrency'
                        className='text-[#0a5666] text-xl font-medium mb-1'
                    >
                        From:
                    </label>
                    <select
                        id='FromCurrency'
                        className='rounded-md bg-[#4d2354] p-2 w-80'
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                    >
                        {currencies.map((Currency) =>(
                            <option  key={Currency} value={Currency}>
                                {Currency}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col mt-2'>
                    <label
                    className='text-[#0a5666]  text-xl font-medium mb-1'
                    htmlFor='ToCurrency'
                    >
                        To:
                    </label>
                    <select
                    id='ToCurrency'
                    className='rounded-md bg-[#4d2354] p-2 w-80'
                    value={toCurrency}
                    onChange={(e)=> setToCurrency(e.target.value)}
                    >
                        {currencies.map((Currency)=>(
                            <option value={Currency} key={Currency}>
                                {Currency}
                            </option>
                        ))}
                    </select>
                </div>
               </div>
               <div className='mt-6 flex flex-col '>
                    <label
                    htmlFor='Amount'
                    className='text-[#0a5666]  text-xl font-medium mb-1'
                    >
                        Amount:
                    </label>
                    <input 
                    type='number' 
                    id='Amount' 
                    value={amount} 
                    className='bg-[#4d2354] w-80 p-1 rounded-xl ' 
                    onChange={(e)=> setAmount(Number(e.target.value))}
                    >
                    </input>
               </div>
               <div className='mt-12 mb-2 rounded-lg transition-all bg-[#0a5666] px-4 p-1 hover:bg-[#2e4051]'>
                    <button
                    onClick={convertHandler}
                    >Convert
                    </button>
               </div>
                    {loading && <p>Loading...</p>}
                    
                    {result !== null &&(
                        <div>
                            {amount} {fromCurrency} = {result} {toCurrency}
                        </div>
                    )}
            </div>
        </div>


    
)

}
export default CurrConverter;