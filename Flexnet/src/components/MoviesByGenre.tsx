import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const genres = [
    'horror',
    'comedy',
    'drama',
    'action',
    'romance',
    'animation',
    'crime',
    'documentary',
    'family',
    'fantasy',
    'history',
    'music',
    'mystery',
    'thriller',
    'war',
    'western',
    'tv movie',
    'science fiction'
];

function MoviesByGenre() {
    const [moviesByGenre, setMoviesByGenre] = useState<{ [key: string]: any[] }>({});

    useEffect(() => {
        const fetchMoviesByGenre = async () => {
            const fetchedMoviesByGenre: { [key: string]: any[] } = {};

            for (const genre of genres) {
                try {
                    const response = await fetch(`http://localhost:8000/movies/recom/${genre}`, {
                        method: 'GET',
                        headers: {
                            'accept': 'application/json',
                        },
                    });
                    const data = await response.json();
                    fetchedMoviesByGenre[genre] = data;
                } catch (error) {
                    console.error(`Error fetching movies for genre ${genre}:`, error);
                }
            }

            setMoviesByGenre(fetchedMoviesByGenre);
        };

        fetchMoviesByGenre();
    }, []);

    return (
        <div id="topgenres" className="p-12">
            <h2 className="font-bold text-3xl mb-6">Top Movies by Genre</h2>
            {Object.keys(moviesByGenre).map((genre) => (
                <div key={genre} className="mb-8">
                    <h3 className="font-bold text-2xl mb-4 capitalize">{genre}</h3>
                    <div className="flex flex-wrap justify-center">
                        {moviesByGenre[genre].map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MoviesByGenre;
