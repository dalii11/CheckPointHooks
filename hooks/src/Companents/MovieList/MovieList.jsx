import React from "react";
import MovieCart from "../MovieCard/MovieCard";
import "./MovieList.css";

function MovieList({ myMoviesList, reateSearch, titleSearch }) {
    return (
        <div className="moviesList">
            {myMoviesList

                .filter(
                    (element) =>
                        element.rate >= reateSearch &&
                        element.title.toLowerCase().includes(titleSearch)
                )
                .map((element, i) => (
                    <MovieCart movie={element} key={i} />
                ))}
        </div>
    );
}

export default MovieList;
