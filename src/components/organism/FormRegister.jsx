import React from 'react'
import Button from '../atom/button/Button'
import InputForm from '../atom/input/Index'

const FormLogin = () => {
    return (
        <div>
            <form action="" className='my-5'>
                <div>
                    <InputForm Label="Full Name" name="fullname" type="text" placeholder="" />
                </div>
                <div className='mt-5'>
                    <InputForm Label="Email" name="email" type="email" placeholder="Enter your email" />
                </div>
                <div className='mt-5'>
                    <InputForm Label="Password" name="password" type="password" placeholder="******" />
                </div>
                <Button
                    classname="bg-blue-900 mt-5">Login</Button>
            </form>
        </div>
    )
}

export default FormLogin