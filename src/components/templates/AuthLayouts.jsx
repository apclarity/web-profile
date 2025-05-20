import React from 'react'

const AuthLayouts = (props) => {
    const { children, title } = props
    return (
        <div>
            <div className='w-full max-w-sm'>
                <h1 className='font-bold text-blue-600 text-3xl'>{title}</h1>
                <p>Welcome, please enter your details</p>
                {children}
            </div>
        </div>
    )
}

export default AuthLayouts