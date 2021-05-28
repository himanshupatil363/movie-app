import React from 'react'

import {
    NavLink
  } from "react-router-dom";
const Base = ({
  title = "",
  children
}) => {
  return (
    <div className="flex flex-col justify-between bg-purple-200 min-h-screen">
       
        <ul className="flex flex-col md:flex-row justify-between items-center bg-gray-800 px-10 py-4 text-white">
            <li className="text-4xl font-mono tracking-wider text-purple-400 font-bold">Doggie</li>
            <NavLink exact activeClassName="px-4 py-2 bg-purple-300 text-black" to="/">movies</NavLink>
            <NavLink activeClassName="px-4 py-2 bg-purple-300 text-black" to="/addmovie">Add Movie</NavLink>
        </ul>
            
        <div className="bg-purple-200 h-full">
        {children}
        </div>
        <div className="flex bg-gray-800 text-white justify-center">
            Footer
        </div>
    </div>
  )
}

export default Base