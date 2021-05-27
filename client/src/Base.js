import React from 'react'

import {
    Link
  } from "react-router-dom";
const Base = ({
  title = "",
  children
}) => {
  return (
    <div className="flex flex-col justify-between h-full">
        <div>
        <ul className="flex flex-col md:flex-row justify-between items-center bg-gray-800 px-10 py-4">
            <li className="text-4xl font-mono tracking-wider text-purple-400 font-bold">Doggie</li>
            <li className="text-white"><Link to="/">movies</Link></li>
            <li><Link to="/addmovie">add movie</Link></li>
        </ul>
        
            {children}
        </div>
        <div className="flex bg-gray-800 text-white justify-center">
            Footer
        </div>
    </div>
  )
}

export default Base