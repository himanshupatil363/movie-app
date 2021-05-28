import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Video = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <div className="flex flex-col h-full">
      <video
        className="bg-white"
        src={`http://localhost:8000/${movie.video}`}
        controls="controls autoplay"
      ></video>
      <div className="flex items-center justify-between mx-2 md:mx-10">
        <div className="flex items-center">
        <img
          className="h-20 w-20 object-cover mr-2 md:mr-10 my-2 rounded-full"
          src={`http://localhost:8000/${movie.image}`}
          alt="no"
        />
        <div>
          <p className="font-bold text-purple-700"> {movie.name}</p>
          <p>language :  {movie.language}</p>
        </div>
        </div>
        <p>Date : {movie.date}</p>
      </div>
    </div>
  );
};

export default Video;
