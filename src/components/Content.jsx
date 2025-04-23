import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Marquee from './Marquee';
import AboutMe from './AboutMe';
import MyWork from './MyWork';
import VelocityText from './VelocityText'
import SpotifyNowPlaying from './SpotifyNowPlaying';
import Availability from './Availability';
import ComingSoon from './ComingSoon'

const calculateDuration = (startDateStr, endDateStr) => {
    const start = new Date(startDateStr);
    const end = endDateStr ? new Date(endDateStr) : new Date();

    let totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const yearStr = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
    const monthStr = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

    return [yearStr, monthStr].filter(Boolean).join(' ');
};



const Content = ({ setFooterY }) => {
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

    // paralax
    const myWorkRef = useRef(null)
    const [vh, setVh] = useState(window.innerHeight)

    useEffect(() => {
        const onResize = () => setVh(window.innerHeight)
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    const { scrollYProgress } = useScroll({
        target: myWorkRef,
        offset: ['start end', 'end start'],
    })
    const footerYMotion = useTransform(scrollYProgress, [0, 1], [500, 1])

    useEffect(() => {
        const unsub = footerYMotion.onChange((v) => setFooterY(v))
        return unsub
    }, [footerYMotion, setFooterY])

    return (
        <div>
            <Marquee />
            <AboutMe />
            <motion.div
                id='tech-stack'
                ref={ref}
                initial={{ opacity: 0, y: 400 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className='grid grid-cols-1 md:grid-cols-2 gap-2 py-24'
                onMouseMove={handleMouseMove}>
                {/* card 1 */}
                <motion.div


                    className="relative rounded-2xl overflow-hidden outline-2 outline-gray-100/10"
                >
                    <div
                        className="absolute -inset-1 z-0 rounded-2xl pointer-events-none transition-all duration-300"
                        style={{
                            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(236, 72, 153, 0.2), transparent 60%)`,
                        }}
                    />
                    <div className="w-full max-w-3xl mx-auto">
                        <div className="p-5">
                            <h2 className='text-3xl md:text-5xl text-black'>Tech Stack</h2>
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
                <div className="grid grid-rows-1 border-8 border-pink-500 rounded-2xl">
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
                <ComingSoon />
                {/* 3 */}
                <div id='experience' className="bg-blue-700 rounded-2xl p-6 shadow-md">
                    <div className="w-full max-w-3xl mx-auto">
                        <h2 className='text-3xl md:text-5xl text-white'>Experiences</h2>
                        <div className="-my-6 ml-0 md:-ml-10 mt-5">

                            {/* Timeline Item */}
                            <div className="relative pl-10 sm:pl-20 py-6 group">
                                <div className="font-caveat font-medium text-2xl text-white mb-1 sm:mb-0">Frontend Developer at Jobhun</div>
                                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[3.75rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-700 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[3.75rem] after:-translate-x-1/2 after:translate-y-1.5">
                                    <div className="text-xl font-bold text-white">Surabaya, Indonesia</div>
                                </div>
                                <div className="text-white">June 2021 - now • {calculateDuration('2021-06-01')}</div>
                            </div>

                            {/* Copy for other items */}
                            <div className="relative pl-10 sm:pl-20 py-6 group">
                                <div className="font-caveat font-medium text-2xl text-white mb-1 sm:mb-0">Intern Web Developer at Jobhun</div>
                                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[3.75rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-700 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[3.75rem] after:-translate-x-1/2 after:translate-y-1.5">
                                    <div className="text-xl font-bold text-white">Surabaya, Indonesia</div>
                                </div>
                                <div className="text-white">March 2021 - June 2021 • {calculateDuration('2021-03-01', '2021-06-01')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div id='my-work' ref={myWorkRef}>
                <MyWork />
            </div>
            <div className='py-20'>
                <Availability />
            </div>
            {/* <div>
                <SpotifyNowPlaying />
            </div> */}
        </div>
    )
}

export default Content