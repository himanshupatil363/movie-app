import React, { useEffect, useState } from 'react'
import Movie from '../Components/Movie'
import axios from 'axios'
const Movies = () => {
    const[movies,setMovies] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/movies")
        .then(res => setMovies(res.data))
        .catch(error=>console.log(error))
    })
    
    return (
        <div className="h-full flex flex-wrap justify-around items-center">
            {!movies.length ? (<p>loading...</p>):

            
                movies.map((movie,index)=>(
                    <Movie key={index} movie={movie}/>
                    ))
            }



        </div>
    )
}

export default Movies
