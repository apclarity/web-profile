import React from 'react'
import Instagram from './Instagram'
import Linkedin from './Linkedin'
import Github from './Github'

const Footer = () => {
    return (
        <div>
            <div className='flex justify-center h-[400px] bg-black items-center px-5 sm:px-0'>
                <div className='max-w-md'>
                    <div className='text-white text-4xl font-bold'>
                        Andreas Peter Chandra
                    </div>
                    <p className='text-sm mt-5 text-white font-light'>A passionate and driven Front-End Developer with experience in building responsive, efficient, and user-centered web
                        applications. Enthusiastic about technology and continuously improving skills through hands-on experience and learning.</p>
                    <div className='fill-white inline-flex gap-3 mt-5'>
                        <Linkedin />
                        <Github />
                        <Instagram />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer