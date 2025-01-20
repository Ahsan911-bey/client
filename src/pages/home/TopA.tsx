import {useState, useEffect} from 'react';
import axios from 'axios';

interface AnimeT{
    rank:number;
    id:string;
    name:string;
    jname:string;
    poster:string;
}

const TopA: React.FC= () =>{
    const [AnimeListT, setAnimeListT] =useState<AnimeT[]>([]);
    const [error , setError] = useState<string | null>(null);

    useEffect(() =>{
        const fetchAnimeListT = async () =>{
            try{
                const response = await axios.get("http://127.0.0.1:3001/api/trending");
                const data= response.data;
                const formattedData= data.map((anime:AnimeT) => ({
                    rank:anime.rank,
                    id:anime.id,
                    name:anime.name,
                    jname:anime.jname,
                    poster:anime.poster,
                }));
                setAnimeListT(formattedData);
            }
            catch(error){
                console.error("ERROR FETCHING FROM API2");
                setError('ERROR FETCHING FROM API2');
            }
        };
        fetchAnimeListT();
    }, []);

    return(
        <div className='hidden  lg:flex flex-col items-center relative bg-[#1c1c1c] w-1/4 2xl:w-1/5 h-1/5 mt-4 rounded-lg'>
        <h3 className='font-bold mt-2 text-2xl text-white'>Top Anime</h3>
        <div>
            {AnimeListT.map((anime) =>(
                <div key={anime.id}>
                    <div className='group flex flex-row mt-10 gap-4 hover:bg-slate-950 py-2 rounded-lg'>
                        <h1 className='group-hover:text-blue-600 font-bold text-3xl text-[#374151] ml-4'>{anime.rank}</h1>
                        <img src={anime.poster} alt={anime.name} className='h-16 w-14 rounded-lg' />
                        <p className='group-hover:text-blue-600 font-bold text-sm line-clamp-2'>{anime.name}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )

}
export default TopA;