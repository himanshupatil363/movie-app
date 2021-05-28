import React, { useState } from 'react'
import axios from 'axios'
const AddMovie = () => {
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [language, setLanguage] = useState("")
    const [image,setImage] = useState("")
    // const [video,setVideo] = useState("")
    const submitHandler = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("name",name)
        formData.append("date",date)
        formData.append("language",language)
        formData.append("movieImage",image)
        // formData.append("movieVideo",video)
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
        <form onSubmit={submitHandler} className="bg-white flex flex-col" action="">
            <input placeholder="movie name" type="text" name="" id="" value={name} onChange={(e)=>(setName(e.target.value))}/>
            <input placeholder="language" type="text" name="" id="" value={language} onChange={(e)=>(setLanguage(e.target.value))}/>
            <input placeholder="date" type="date" name="" id="" value={date} onChange={(e)=>(setDate(e.target.value))}/>
            <input type="file" accept="image/*" name="movieImage" onChange={(e)=>setImage(e.target.files[0])}/>
            {/* <input type="file" name="movieVideo" accept="video/*" onChange={(e)=>setVideo(e.target.files[0])}/> */}
            <input type="submit" />
        </form>
        </div>
    )
}

export default AddMovie
