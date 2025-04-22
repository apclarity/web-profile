import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Spinner from './components/Spinner'
import MovieCard from './components/MovieCard'
import { useDebounce } from 'react-use'
import { updateSearchCount, getTrendingMovies } from './appwrite'

const App = () => {
    // state
    const [searchTerm, setSearchTerm] = useState('')
    const [errorMessage, setErrorMesssage] = useState('')
    const [movieList, setMovieList] = useState([])
    const [trendingMovies, setTrandingMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [debounceSearchTerm, setDebounceSearchTerm] = useState('')

    useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm])

    // endpoint
    const API_BASE_URL = 'https://api.themoviedb.org/3'

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY

    const API_OPTIONS = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    }

    const fetchMovies = async (query = '') => {
        setIsLoading(true)
        setErrorMesssage('')

        try {
            const url = query
                ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
                : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
            const res = await fetch(url, API_OPTIONS)

            if (!res.ok) {
                throw new Error('Failed to fetch movies')
            }

            const data = await res.json()

            if (data.Response == 'False') {
                setErrorMesssage(data.Error || 'Failed to fetch movies')
                setMovieList([])
                return
            }

            setMovieList(data.results || [])

            if (query && data.results.length > 0) {
                await updateSearchCount(query, data.results[0])
            }
        } catch (error) {
            console.log(`Error fetching movies: ${error}`)
            setErrorMesssage('Error fetching movies. Please try again later.')
        } finally {
            setIsLoading(false)
        }
    }

    const loadTrendingMovies = async () => {
        try {
            const movies = await getTrendingMovies()

            setTrandingMovies(movies)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMovies(debounceSearchTerm)
    }, [debounceSearchTerm])

    useEffect(() => {
        loadTrendingMovies()
    }, [])

    return (
        <main>
            <div className='pattern' />
            <div className='wrapper'>
                <header>
                    <img src="./hero.png" alt="Hero Banner" />
                    <h1>Find <span className='text-gradient'>Movies</span> To Watch!</h1>
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </header>

                {trendingMovies.length > 0 && (
                    <section className='trending'>
                        <h2>Trending Movies</h2>

                        <ul>
                            {trendingMovies.map((movie, index) => (
                                <li key={movie.$id}>
                                    <p>{index + 1}</p>
                                    <img src={movie.poster_url} alt={movie.title} />
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                <section className='all-movies'>
                    <h2>All Movies</h2>
                    {isLoading ? (
                        <Spinner />
                    ) : errorMessage ? (
                        <p className='text-red-500'>{errorMessage}</p>
                    ) : (
                        <ul>
                            {movieList.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </ul>
                    )}
                </section>
            </div>
        </main>
    )
}


export default App