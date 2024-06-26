import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Movie } from "./DataTypes";


function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Code pour récupérer les données des films depuis votre backend
    // Exemple de récupération des données avec fetch
    fetch("http://0.0.0.0:8000/movies/?skip=1&limit=10")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div id="movies-section">
      <h1 className="font-bold font-serif text-3xl mb-3 px-6">Popular Recommendations</h1>
      <div className="flex flex-wrap justify-center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
