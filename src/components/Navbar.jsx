import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [isVisible, setIsVisible] = useState(true)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState(null)

    const navItems = [
        { label: 'Home', scrollTo: '#header' },
        { label: 'Tech Stack', scrollTo: '#tech-stack' },
        { label: 'My work', scrollTo: '#my-work' }
    ]

    // Handle scroll up/down visibility
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY
            setIsVisible(currentScroll < scrollPosition || currentScroll < 50)
            setScrollPosition(currentScroll)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [scrollPosition])

    // Intersection Observer to detect active section
    useEffect(() => {
        const sections = navItems.map(item => document.querySelector(item.scrollTo))

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`)
                    }
                })
            },
            {
                threshold: 0.6, // Adjust how much of section should be visible to count
            }
        )

        sections.forEach(section => {
            if (section) observer.observe(section)
        })

        return () => {
            sections.forEach(section => {
                if (section) observer.unobserve(section)
            })
        }
    }, [])

    return (
        <nav className={`
      fixed top-0 z-50 transition-transform duration-500 ease-in-out w-full
      ${isVisible ? 'translate-y-0' : '-translate-y-full'}
    `}>
            <div className={`
        ${scrollPosition > 50
                    ? 'backdrop-blur-md bg-white/10 mt-0 md:mt-5 max-w-screen-sm md:rounded-2xl duration-300'
                    : 'bg-white duration-500'}
        w-full mx-auto pr-5
      `}>
                <div className="flex items-center justify-center p-4">
                    <button
                        className="md:hidden text-black cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Menu Desktop */}
                    <div className="hidden md:block">
                        <ul className="font-inter flex flex-col md:flex-row md:space-x-8">
                            {navItems.map((menu, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => {
                                            window.lenis?.scrollTo(menu.scrollTo)
                                            setIsMenuOpen(false)
                                        }}
                                        className={`
                      block text-xl cursor-pointer
                      ${activeSection === menu.scrollTo
                                                ? 'text-blue-700 font-arapey-italic underline font-bold'
                                                : 'text-black hover:underline font-medium'}
                    `}
                                    >
                                        <div className='text-lg md:text-xl'>
                                            {menu.label}
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden px-4  pb-4">
                        <ul className="font-medium flex flex-col space-y-2 ">
                            {navItems.map((menu, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => {
                                            window.lenis?.scrollTo(menu.scrollTo)
                                            setIsMenuOpen(false)
                                        }}
                                        className={`
                      block font-bold p-2 text-center cursor-pointer
                      ${activeSection === menu.scrollTo
                                                ? 'text-blue-700 font-arapey-italic underline font-bold'
                                                : 'text-black hover:underline font-medium'}
                    `}
                                    >
                                        <div className='text-lg md:text-xl'>
                                            {menu.label}
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
