import React, { useState } from 'react'
import axios from 'axios'
const AddMovie = () => {
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [language, setLanguage] = useState("")
    const [image,setImage] = useState("")
    const [video,setVideo] = useState("")
    const submitHandler = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("name",name)
        formData.append("date",date)
        formData.append("language",language)
        formData.append("movieImage",image)
        formData.append("movieVideo",video)
        setName('')
        setLanguage('')
        setDate('')
        axios.post("http://localhost:8000/movies/add",formData
        )
        .then(res=>console.log(res.data))
        .catch(error=>console.log(error))
    }
    return (
        <div className="flex justify-center items-center h-full" en encType="multipart/form-data">
        <form onSubmit={submitHandler} className="bg-white flex flex-col p-10 rounded-2xl shadow-2xl" action="">
            <input className="my-4 border px-4 py-2 border-gray-300 rounded-md" placeholder="movie name" type="text" value={name} onChange={(e)=>(setName(e.target.value))}/>
            <input className="my-4 border px-4 py-2 border-gray-300 rounded-md" placeholder="language" type="text" value={language} onChange={(e)=>(setLanguage(e.target.value))}/>
            <input className="my-4 border px-4 py-2 border-gray-300 rounded-md" placeholder="date" type="date" value={date} onChange={(e)=>(setDate(e.target.value))}/>
            <input className="my-4 border px-4 py-2 border-gray-300 rounded-md" type="file" accept="image/*" name="movieImage" onChange={(e)=>setImage(e.target.files[0])}/>
            <input className="my-4 border px-4 py-2 border-gray-300 rounded-md" type="file" name="movieVideo" accept="video/*" onChange={(e)=>setVideo(e.target.files[0])}/>
            <input className="my-4 border px-4 py-2 bg-gray-700 text-purple-200 font-bold text-lg rounded-md" type="submit" />
        </form>
        </div>
    )
}

export default AddMovie
