import React, { useState } from 'react'
import axios from 'axios'
const AddMovie = () => {
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [language, setLanguage] = useState("")
    const submitHandler = (e) =>{
        e.preventDefault();
        const movie={
            name,
            date,
            language
        }
        setName('')
        setLanguage('')
        setDate('')
        axios.post("http://localhost:8000/movies/add",movie)
        .then(res=>console.log(res.data))
        .catch(error=>console.log(error))
    }
    return (
        <div className="flex justify-center items-center h-full ">
        <form onSubmit={submitHandler} className="bg-white flex flex-col" action="">
            <input placeholder="movie name" type="text" name="" id="" value={name} onChange={(e)=>(setName(e.target.value))}/>
            <input placeholder="language" type="text" name="" id="" value={language} onChange={(e)=>(setLanguage(e.target.value))}/>
            <input placeholder="date" type="date" name="" id="" value={date} onChange={(e)=>(setDate(e.target.value))}/>
            <input type="file" accept="image/*" />
            <input type="file" name="" id="" accept="video/*" />
            <input type="submit" />
        </form>
        </div>
    )
}

export default AddMovie
