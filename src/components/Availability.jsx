import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Linkedin from './Linkedin';
import Github from './Github';
import Instagram from './Instagram';
import Mail from './Mail';

const ContactModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex justify-center items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Overlay */}
                    <motion.div
                        className="absolute inset-0 bg-gray-400/30"
                        style={{ willChange: 'backdrop-filter' }}
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1, backdropFilter: 'blur(3px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative bg-white p-6 shadow-lg text-center max-w-sm w-full z-10"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 180, damping: 30 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal content */}
                        <button onClick={onClose} className="absolute top-2 right-4 text-blue-700 hover:text-blue-700/50 text-xl font-bold duration-200">✕</button>
                        <div className='fill-black inline-flex gap-3 mt-5'>
                            <Linkedin />
                            <Github />
                            <Instagram />
                        </div>
                        <div className='mt-5'>
                            <motion.a
                                whileHover={{
                                    scale: 1,
                                    y: -5,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                                href="mailto:andreaspeterc@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                                className='flex items-center p-2 bg-blue-700 fill-white text-white'
                            >
                                <Mail />
                                <p className='text-sm'>Send Me a Message</p>
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const Availability = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div >
            <div className='flex justify-center text-4xl'>
                <h2 className='font-bold max-w-2xl text-center '>I'm available for full-time opportunities and freelance projects.</h2>
            </div>
            <div className='flex justify-center'>
                <p className='max-w-md text-center mt-3'>I thrive on building dynamic web applications and delivering seamless, user-focused digital experiences that blend functionality with aesthetic appeal.</p>
            </div>
            <div className='flex justify-center mt-10'>
                <button onClick={() => setIsModalOpen(true)} className='group relative hover:text-gradient cursor-pointer p-2 outline-[5px] hover:outline-0 transition-all duration-300'>
                    <span className='font-bold text-xl'>
                        Get in Touch
                        <span className='absolute left-0 bottom-0 w-0 h-[5px] bg-blue-700 transition-all duration-300 group-hover:w-full'></span>
                    </span>
                </button>
            </div>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}

export default Availability