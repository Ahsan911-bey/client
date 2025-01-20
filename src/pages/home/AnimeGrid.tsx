import {useState, useEffect} from 'react';
import axios from 'axios';
import { IoPlay } from "react-icons/io5";



interface Anime{
    id:string;
    title:string;
    image:string;
    duration:string;
    jname:string;
    type:string;
    nsfw:boolean;
    sub:number;
    dub:number;
    episodes:number;

}
interface AnimeT{
    rank:number;
    id:string;
    name:string;
    jname:string;
    poster:string;
}

const AnimeGrid: React.FC = () =>{
    const [AnimeList , setAnimeList] = useState<Anime[]>([]);
    const [AnimeListT, setAnimeListT] =useState<AnimeT[]>([]);
    const [error , setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAnimeList = async() =>{
            try{
                const response = await axios.get("http://127.0.0.1:3001/api/most-popular?page=2");
                const data = response.data;
                const formattedData = data.map((anime:Anime) =>({
                    id:anime.id,
                    title:anime.title,
                    image:anime.image,
                    duration:anime.duration,
                    jname:anime.jname,
                    type:anime.type,
                    nsfw:anime.nsfw,
                    sub:anime.sub,
                    dub:anime.dub,
                    episodes:anime.episodes,
                }));
                setAnimeList(formattedData);
            }
            catch(error){
                console.error("THERE WAS AN ERROR FETCHING DATA FROM API 1",error);
                setError('THERE IS AN ERROR FETCHING DATA FROM API 2');
            }
        };
        fetchAnimeList();
    }, []);
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
    if(error){
        return <div>{error}</div>;
    }

    return(
        <div className='flex '>
            <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5'>
                {AnimeList.map((anime) =>(
                    <div key={anime.id} className='group relative mt-4 shadow-inner overflow-hidden transition ease-in-out hover:scale-105 duration-300'>
                        <img src={anime.image} alt={anime.title} className=' object-cover rounded-lg h-80 w-70' />
                        <div className='group-hover:opacity-60 absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-55'></div>
                            <div className='absolute bottom-0 left-2 drop-shadow-2xl -translate-y-1 p-2 '>
                                <p className='text-white font-bold line-clamp-2'>{anime.title}</p>
                                <div className='flex items-center text-xs text-gray-300 gap-2'>
                                    <span className='bg-purple-500 px-2 py-0.5 rounded-sm'>{anime.type}</span>
                                    <span>{anime.duration}</span>
                                </div>
                            </div>
                            {anime.nsfw && (
                                <div className='absolute bg-red-500 top-1 left-2 px-1 py-0.5 rounded-md text-sm'>18+</div>
                            )}
                            <div className='hidden group-hover:block absolute top-32 left-24 bg-purple-600 rounded-3xl'>
                            <IoPlay size={50} />
                            </div>
                    </div>
                ))}
            </div>
            <div className='hidden  lg:flex flex-col items-center relative bg-[#1c1c1c] w-1/5 h-1/5 mt-4 rounded-lg'>
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
        </div>
    )
}
export default AnimeGrid;