
import React from "react";

interface Props {
  movie: Movie;
}

function MovieCard({ movie }: Props) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5 p-2">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto"
        />
        <div className="px-4 py-2">
          <div className="font-bold text-lg mb-1">{movie.title}</div>
          <p className="text-gray-700 text-sm">{movie.overview}</p>
        </div>
        <div className="px-4 py-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
            Popularity: {movie.popularity}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;