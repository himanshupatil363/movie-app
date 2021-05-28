import React from "react";
import { Link } from "react-router-dom";
const Movie = ({movie}) => {
  return (
    <Link
      to={`/${movie._id}`}
      className="flex flex-col m-10 h-72 w-56 px-2 py-5 justify-around items-center bg-white rounded-2xl shadow-2xl"
    >
      <img
        className="object-cover h-3/4 w-4/5"
        src={`http://localhost:8000/${movie.image}`}
        alt=""
      />
      <p className="text-xl font-bold text-purple-800">{movie.name}</p>
      <div className="flex justify-around w-full">
        <p className="font-bold">{movie.language}</p>
        <p>{movie.date.substring(0, 10)}</p>
      </div>
    </Link>
  );
};

export default Movie;
