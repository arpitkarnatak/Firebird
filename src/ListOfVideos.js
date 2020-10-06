import React from 'react'
import './ListOfVideos.css'

function ListOfVideos({author,video}) {
    return (
        <div className="RowOfVideos">
            {author}
        </div>
    )
}

export default ListOfVideos
