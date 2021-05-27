import React from 'react'
import { Link } from 'react-router-dom'
const Movie = ({movie}) => {
    return (
            <Link to={`video/${movie._id}`} className="flex flex-col m-10 items-center bg-white rounded-2xl shadow-2xl">
                <p className="w-48 h-20">img</p>
                <p>{movie.name}</p>
                <p>{movie.date}</p>
                <p>{}</p>
            </Link>
    )
}

export default Movie
