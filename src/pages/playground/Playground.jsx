import React from 'react'
import MovieList from '../../components/MovieList'
import MovieInput from '../../components/MovieInput'
import Button from '../../components/atom/button/Button'
import Input from '../../components/atom/input/Input'
import Label from '../../components/atom/input/Label'
import FormLogin from '../../components/organism/FormLogin'
import Login from '../auth/Login'

const Playground = () => {
    return (
        <div className='mt-16 flex justify-center min-h-screen items-center '>
            {/* <MovieInput />
            <MovieList /> */}
            <Login />
        </div>
    )
}

export default Playground