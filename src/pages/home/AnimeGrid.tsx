import React from "react";
import AnimeList from "./AnimeList";
const AnimeGrid= () =>{
    return(
        <div className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:gird-cols-3 lg:grid-cols-6 gap-6">
                {AnimeList.map((anime,Index) =>(
                    <div key={Index} className="p-4 rounded-md shadow-2xl hover:-translate-y-2 duration-100 transition-all">
                        <img
                            src={anime.src}
                            alt={anime.title}
                            className="w-auto h-80 object-cover rounded-md"
                        />
                        <div className="mt-4">
                            <h2 className="text-lg font-bold">{anime.title}</h2>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default AnimeGrid;