import React from 'react'
import MovieList from '../components/MovieList'
import MovieInput from '../components/MovieInput'

const Playground = () => {
    return (
        <div className='mt-16'>
            <MovieInput />
            <MovieList />
        </div>
    )
}

export default Playground