import { useEffect, useState } from "react";
import axios from "axios";

interface Anime {
    id: string;
    title: string;
    image: string;
    duration: string;
    jname: string;
    type: string;
    nsfw: boolean;
    sub: number;
    dub: number;
    episodes: number;
}

const AnimeGrid: React.FC = () => {
    const [animeList, setAnimeList] = useState<Anime[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAnimeList = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:3001/api/latest-completed");
                const data = response.data;

                const formattedData = data.map((anime: any) => ({
                    id: anime.id,
                    title: anime.title,
                    image: anime.image,
                    duration: anime.duration,
                    jname: anime.jname,
                    type: anime.type,
                    nsfw: anime.nsfw,
                    sub: anime.sub,
                    dub: anime.dub,
                    episodes: anime.episodes,
                }));
                setAnimeList(formattedData);
            } catch (error) {
                console.error("Error fetching anime list:", error);
                setError("Failed to fetch anime list. Please try again later.");
            }
        };

        fetchAnimeList();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            {animeList.map((anime) => (
                <div key={anime.id} className="anime-card">
                    <img src={anime.image} alt={anime.title} className="anime-image" />
                    <h3>{anime.title}</h3>
                    <p>Japanese Name: {anime.jname}</p>
                    <p>Type: {anime.type}</p>
                    <p>Duration: {anime.duration}</p>
                    <p>Episodes: {anime.episodes}</p>
                    <p>Subbed Episodes: {anime.sub}</p>
                    <p>Dubbed Episodes: {anime.dub}</p>
                    <p>{anime.nsfw ? "NSFW" : "Safe for Work"}</p>
                </div>
            ))}
        </div>
    );
};

export default AnimeGrid;
