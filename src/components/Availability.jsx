import React from 'react'

const Availability = () => {
    return (
        <div >
            <div className='flex justify-center text-4xl'>
                <h2 className='font-bold max-w-2xl text-center '>I'm currently open to full-time opportunities and freelance projects.</h2>
            </div>
            <div className='flex justify-center'>
                <p className='max-w-md text-center mt-3'>I thrive on building dynamic web applications and delivering seamless, user-focused digital experiences that blend functionality with aesthetic appeal.</p>
            </div>
            <div className='flex justify-center mt-10'>
                <button className='group relative hover:text-gradient cursor-pointer p-2 outline-[5px] hover:outline-0 transition-all duration-300'>
                    <span className='font-bold text-xl'>
                        Get in touch
                        <span className='absolute left-0 bottom-0 w-0 h-[5px] bg-blue-700 transition-all duration-300 group-hover:w-full'></span>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Availability