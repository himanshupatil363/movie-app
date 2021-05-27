import React from 'react'
import { useParams } from 'react-router-dom';
const Video = () => {
    let { id } = useParams();
    return (
        <div>
            video {id}
        </div>
    )
}

export default Video
