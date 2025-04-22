import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import Marquee from './Marquee';
import AboutMe from './AboutMe';
import Windmill from './Windmill';
import MyWork from './MyWork';
import VelocityText from './VelocityText'

const Content = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const expertiseList = {
        languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
        frameworks: ["Vue", "React"],
        css: ["Tailwind", "Bootstrap"],
        ui: ["Figma"],
        tools: ["Git", "GitHub", "VSCode", "Vite", "Webpack", "NPM",
            "ESLint", "Prettier"]
    }

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({ x, y });
    };

    return (
        <div>
            <Marquee />
            <AboutMe />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 py-24'>
                {/* card 1 */}
                <motion.div

                    ref={ref}
                    initial={{ opacity: 0, y: 150 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="relative rounded-2xl overflow-hidden outline-2 outline-gray-100/10"
                    onMouseMove={handleMouseMove}>
                    <div
                        className="absolute -inset-1 z-0 rounded-2xl pointer-events-none transition-all duration-300"
                        style={{
                            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(236, 72, 153, 0.2), transparent 60%)`,
                        }}
                    />
                    <div className="w-full max-w-3xl mx-auto">
                        <div className="p-5">
                            <h2 className='text-xl sm:text-3xl md:text-5xl text-black'>Tech Stack</h2>
                            <h3 className='mt-5 text-black'>Languages</h3>
                            <div className="flex flex-wrap gap-3 mt-3">
                                {expertiseList.languages.map((skill) => (
                                    <span key={skill} className="inline-block text-sm md:text-md px-4 py-1 font-medium text-black hover:text-white hover:bg-pink-600 duration-500 border-2 rounded-full shadow-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <h3 className='mt-5 text-black'>Frameworks</h3>
                            <div className="flex flex-wrap gap-3 mt-3">
                                {expertiseList.frameworks.map((skill) => (
                                    <span key={skill} className="inline-block text-sm md:text-md px-4 py-1 font-medium text-black hover:text-white hover:bg-pink-600 duration-500 border-2 rounded-full shadow-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <h3 className='mt-5 text-black'>UI</h3>
                            <div className="flex flex-wrap gap-3 mt-3">
                                {expertiseList.ui.map((skill) => (
                                    <span key={skill} className="inline-block text-sm md:text-md px-4 py-1 font-medium text-black hover:text-white hover:bg-pink-600 duration-500 border-2 rounded-full shadow-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <h3 className='mt-5 text-black'>CSS Frameworks</h3>
                            <div className="flex flex-wrap gap-3 mt-3">
                                {expertiseList.css.map((skill) => (
                                    <span key={skill} className="inline-block text-sm md:text-md px-4 py-1 font-medium text-black hover:text-white hover:bg-pink-600 duration-500 border-2 rounded-full shadow-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <h3 className='mt-5 text-black'>Tools</h3>
                            <div className="flex flex-wrap gap-3 mt-3">
                                {expertiseList.tools.map((skill) => (
                                    <span key={skill} className="inline-block px-4 py-1 text-sm md:text-md font-medium text-black hover:text-white hover:bg-pink-600 duration-500 border-2 rounded-full shadow-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </motion.div>
                {/* 2 */}
                <div id='tech-stack' className="grid grid-rows-1 border-8 border-pink-500 rounded-2xl">
                    {/* <Windmill /> */}
                    <VelocityText baseVelocity={-2}><i className='text-blue-700 font-arapey-italic'>JavaScript</i> Mobile Responsive</VelocityText>
                    <VelocityText baseVelocity={3}>React <i className='font-bebas'>Framer Motion Pinia</i></VelocityText>
                    <VelocityText baseVelocity={-5}>GitHub <i className='text-pink-700'>Web Development TypeScript Lanis</i>CSS</VelocityText>
                    <VelocityText baseVelocity={2}>Vite <i className='font-inter'>Tailwind</i> Git Motion</VelocityText>
                    <VelocityText baseVelocity={6}>React <i className='font-arapey-italic text-blue-700'>Frontend Developer</i></VelocityText>
                    <VelocityText baseVelocity={-5}>Figma CSS TypeScript <i className='text-pink-700 font-arapey-italic'>State Management</i>Interactive</VelocityText>
                    <VelocityText baseVelocity={1}>Dynamic <i className='font-arapey-italic'>Tailwind Lanis</i> NPM Clean Design</VelocityText>
                    <VelocityText baseVelocity={3}>Vite Bootstrap<i className='font-bebas text-blue-700'>Vue.js RESTful API</i></VelocityText>
                </div>
                <div className="border-8 border-blue-700 rounded-2xl">
                </div>
                {/* 3 */}

                <div id='experience' className="bg-blue-700 rounded-2xl p-6 shadow-md">
                    <div className="w-full max-w-3xl mx-auto">
                        <div className="-my-6 -ml-10">
                            {/* Timeline Item */}
                            <div className="relative pl-10 sm:pl-20 py-6 group">
                                <div className="font-caveat font-medium text-2xl text-white mb-1 sm:mb-0">Frontend Developer at Jobhun</div>
                                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[3.75rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-700 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[3.75rem] after:-translate-x-1/2 after:translate-y-1.5">
                                    <div className="text-xl font-bold text-white">Surabaya, Indonesia</div>
                                </div>
                                <div className="text-white">June 2021 - now • 3 years 11 month</div>
                            </div>

                            {/* Copy for other items */}
                            <div className="relative pl-10 sm:pl-20 py-6 group">
                                <div className="font-caveat font-medium text-2xl text-white mb-1 sm:mb-0">Intern Web Developer at Jobhun</div>
                                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[3.75rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-700 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[3.75rem] after:-translate-x-1/2 after:translate-y-1.5">
                                    <div className="text-xl font-bold text-white">Surabaya, Indonesia</div>
                                </div>
                                <div className="text-white">March 2021 - June 2021 • 4 month</div>
                            </div>

                            {/* <div className="relative pl-10 sm:pl-20 py-6 group">
                            <div className="font-caveat font-medium text-2xl text-black mb-1 sm:mb-0">The acquisitions</div>
                            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[3.75rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[3.75rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <div className="text-xl font-bold text-black">Acquired various companies, including Technology Inc.</div>
                            </div>
                            <div className="text-black">Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam.</div>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div id='my-work'>
                <MyWork />

            </div>

        </div>
    )
}

export default Content