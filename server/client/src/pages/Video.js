import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import img from '/uploads/images/redesign-comparison-4.png'
const Video = () => {
    let  {id}  = useParams();
    const[movie,setMovie] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8000/movies/${id}`)
        .then(res => setMovie(res.data))
        .catch(error=>console.log(error))
    })
    return (
        <div>
        {movie.name}
        {movie.date}
        <img src={img} alt="no" />
        </div>
    )
}

export default Video
