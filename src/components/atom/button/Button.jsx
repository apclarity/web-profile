import React from 'react'

const Button = (props) => {
  const { children, classname = 'bg-blue-500' } = props
  return (
    <div>
      <button
        type='submit'
        className={` ${classname} hover:bg-blue-700 text-white font-bold py-2 px-4 `}>
        {children}
      </button>
    </div>
  )
}

export default Button