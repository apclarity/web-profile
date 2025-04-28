import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeMovie } from '../slice/movieSlice'

const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies)

  const dispatch = useDispatch()

  const handleRemoveMovie = (id) => {
    dispatch(removeMovie(id))
  }
  return (
    <div>
      <h1>Movies</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          {movie.title}
          <button onClick={() => handleRemoveMovie(movie.id)} className='p-1 bg-red-500'>Delete movie</button>
        </div>
      ))}
    </div>
  )
}

export default MovieList