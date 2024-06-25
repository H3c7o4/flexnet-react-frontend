import { useState } from 'react';
import MovieCard from './MovieCard';

function Form() {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [recommendations, setRecommendations] = useState<any[]>([]);

    const handleGenreSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedGenre = e.target.value;
        if (!selectedGenres.includes(selectedGenre)) {
            setSelectedGenres([...selectedGenres, selectedGenre]);
        }
    };

    const removeGenre = (genre: string) => {
        setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
        let recommendations: any[] = [];

        // Récupérer les valeurs des champs de titre de film
        const movieTitles: string[] = [];
        for (let i = 1; i <= 5; i++) {
            const input = (event.target as any).elements[`movieTitle${i}`] as HTMLInputElement;
            if (input && input.value.trim() !== '') {
                movieTitles.push(input.value.trim());
            }
        }

        // Vérifier si au moins un champ de titre de film est rempli
        if (movieTitles.length > 0) {
            // Effectuer une recherche basée sur chaque titre de film non vide
            for (const title of movieTitles) {
                const response = await fetch(`http://0.0.0.0:8000/movies/recommend/${encodeURIComponent(title)}`, {
                    method: 'GET',
                    headers: {
                        'accept': 'application/json',
                    },
                });
                const data = await response.json();
                recommendations.push(...data);
            }
        } else {
            // Si aucun titre de film n'est rempli, vérifier les catégories sélectionnées
            const selectedGenres: string[] = [];
            const genreSelect = (event.target as any).elements['favoriteGenres'] as HTMLSelectElement;
            for (let i = 0; i < genreSelect.options.length; i++) {
                const option = genreSelect.options[i];
                if (option.selected) {
                    selectedGenres.push(option.value);
                }
            }

            // Si des genres sont sélectionnés, effectuer une recherche basée sur les genres
            if (selectedGenres.length > 0) {
                for (const genre of selectedGenres) {
                    const response = await fetch(`http://0.0.0.0:8000/movies/${encodeURIComponent(genre)}?skip=0&limit=5`, {
                        method: 'GET',
                        headers: {
                            'accept': 'application/json',
                        },
                    });
                    const data = await response.json();
                    recommendations.push(...data['Movies from Western category']);
                }
            }
        }

        setRecommendations(recommendations);
    } catch (error) {
        console.error('Error fetching recommendations:', error);
    }
};


    return (
        <div id="form-section" className="flex flex-col justify-between p-12">
            <div className="flex items-center justify-center mx-auto w-full max-w-[800px] bg-white">
                <h1 className="font-bold font-serif text-3xl mb-3">Search for Movies</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        <div>
                            <label htmlFor="movieTitle1" className="mb-3 block text-base font-medium text-[#07074D]">
                                Movie Title 1
                            </label>
                            <input 
                                type="text" 
                                name="movieTitle1" 
                                id="movieTitle1" 
                                placeholder="Enter a movie title"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                            />
                        </div>
                        <div>
                            <label htmlFor="movieTitle2" className="mb-3 block text-base font-medium text-[#07074D]">
                                Movie Title 2
                            </label>
                            <input 
                                type="text" 
                                name="movieTitle2" 
                                id="movieTitle2" 
                                placeholder="Enter a movie title"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                            />
                        </div>
                        <div>
                            <label htmlFor="movieTitle3" className="mb-3 block text-base font-medium text-[#07074D]">
                                Movie Title 3
                            </label>
                            <input 
                                type="text" 
                                name="movieTitle3" 
                                id="movieTitle3" 
                                placeholder="Enter a movie title"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                            />
                        </div>
                        <div>
                            <label htmlFor="movieTitle4" className="mb-3 block text-base font-medium text-[#07074D]">
                                Movie Title 4
                            </label>
                            <input 
                                type="text" 
                                name="movieTitle4" 
                                id="movieTitle4" 
                                placeholder="Enter a movie title"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                            />
                        </div>
                        <div>
                            <label htmlFor="movieTitle5" className="mb-3 block text-base font-medium text-[#07074D]">
                                Movie Title 5
                            </label>
                            <input 
                                type="text" 
                                name="movieTitle5" 
                                id="movieTitle5" 
                                placeholder="Enter a movie title"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                            />
                        </div>
                        <div>
                            <label htmlFor="favoriteGenres" className="mb-3 block text-base font-medium text-[#07074D]">
                                Favorite Genres
                            </label>
                            <select
                                multiple
                                name="favoriteGenres"
                                id="favoriteGenres"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                onChange={handleGenreSelection}
                            >
                                <option value="Action">Action</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Animation">Animation</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Crime">Crime</option>
                                <option value="Documentary">Documentary</option>
                                <option value="Drama">Drama</option>
                                <option value="Family">Family</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="History">History</option>
                                <option value="Horror">Horror</option>
                                <option value="Music">Music</option>
                                <option value="Mystery">Mystery</option>
                                <option value="Romance">Romance</option>
                                <option value="Science Fiction">Science Fiction</option>
                                <option value="TV Movie">TV Movie</option>
                                <option value="Thriller">Thriller</option>
                                <option value="War">War</option>
                                <option value="Western">Western</option>
                            </select>
                            <div className="mt-2">
                                {selectedGenres.map((genre) => (
                                    <span
                                        key={genre}
                                        className="inline-block bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                                    >
                                        {genre}
                                        <button
                                            className="ml-2 text-red-500 hover:text-red-700"
                                            type="button"
                                            onClick={() => removeGenre(genre)}
                                        >
                                            X
                                        </button>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="hover:shadow-form hover:bg-gray-700 w-full rounded-md bg-black py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Get Recommendations
                        </button>
                    </div>
                </form>
            </div>

            {/* Section des recommandations */}
            <div className="mt-8 mx-auto w-full">
                <h2 className="font-bold text-xl mb-4">Recommended Movies</h2>
                <div className="flex flex-wrap justify-center">
                    {recommendations.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Form;