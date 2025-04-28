import React, { useState } from 'react'
import { addMovie } from '../slice/movieSlice'
import { useDispatch } from 'react-redux'

const MovieInput = () => {
    const [newMovie, setNewMovie] = useState("")

    const dispatch = useDispatch()

    const handleAddMovie = () => {
        if (newMovie) {
            dispatch(addMovie(newMovie))
            setNewMovie("")
        }
    }
    return (
        <div>
            <input onChange={(e) => setNewMovie(e.target.value)} value={newMovie} className='border bg-gray-500' />
            <button onClick={handleAddMovie} className='p-2 bg-amber-500'>Add Movie</button>
        </div>
    )
}

export default MovieInput