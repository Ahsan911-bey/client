import {useState, useEffect} from 'react';
import axios from 'axios';
import { IoPlay } from "react-icons/io5";
import TopA from "./TopA";



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

const AnimeGrid: React.FC = () =>{
    const [AnimeList , setAnimeList] = useState<Anime[]>([]);
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
       
    if(error){
        return <div>{error}</div>;
    }

    return(
        <div className='flex gap-4 2xl:gap-7'>
            <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4'>
                {AnimeList.map((anime) =>(
                    <div key={anime.id} className='group relative mt-4 ml-2 shadow-inner overflow-hidden transition ease-in-out hover:scale-105 duration-300'>
                        <img src={anime.image} alt={anime.title} className=' object-cover rounded-lg 2xl:h-80 w-52 2xl:w-56' />
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

            <TopA />

        </div>
    )
}
export default AnimeGrid;