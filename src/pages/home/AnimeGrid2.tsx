 {/*                THIS IS OLD CODE WHICH DOESN'T USES API
    
import React from "react";
import AnimeList from "./AnimeList";
const AnimeGrid= () =>{
    return(
        <div className="p-8">
            <div className="relative grid grid-cols-2 sm:grid-cols-2 md:gird-cols-3 lg:grid-cols-6 md:gap-5">
                {AnimeList.map((anime,Index) =>(
                    <div key={Index} className="p-2 rounded-md shadow-2xl hover:-translate-y-2 duration-100 transition-all group abolute">
                        <div className="z-0">
                        <img
                            src={anime.src}
                            alt={anime.title}
                            className="w-auto h-80 object-cover rounded-md"
                        />
                        </div>
                        <div className="mt-4">
                            <h2 className="text-md font-bold">{anime.title}</h2>
                        </div>
                        <div className="absolute bottom-10 left-60 transform translate-y-9 bg-[#242424] text-white text-sm p-4 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-56 z-50 hidden lg:block">
                            <h3 className="font-bold text-lg mb-2 text-purple-800">{anime.title}</h3>
                            <p className="mb-1">Info: {anime.info}</p>
                            <p className="mb-1">Other Names: {anime.OtherNames}</p>
                            <p className="mb-1">Type: {anime.Type}</p>
                            <p className="mb-1">Date Aired: {anime.DateAired}</p>
                            <p className="mb-1">Year: {anime.Year}</p>
                            <p className="mb-1">Status: {anime.Status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default AnimeGrid;
 */} 