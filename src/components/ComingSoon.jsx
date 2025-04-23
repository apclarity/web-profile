import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const ComingSoon = () => {
    // Ganti nama variabel ini agar tidak bentrok
    const comingSoonRef = useRef(null);

    // Scroll progress
    const { scrollYProgress: comingSoonScroll } = useScroll({
        target: comingSoonRef,
        offset: ['start end', 'end start'],
    });

    const blurAmount = useTransform(comingSoonScroll, [0, 0.2, 0.8, 1], ['8px', '0px', '0px', '8px']);
    return (
        <div ref={comingSoonRef} className="relative flex items-center justify-center overflow-hidden border-8 border-blue-700 rounded-2xl">
            <div>
                <div className='flex justify-between items-center'>
                    <span className="text-[200px] -ml-[50px] font-inter font-bold text-blue-700 blur-sm">
                        ✦︎
                    </span>
                    <span className="text-9xl font-inter font-bold text-blue-700/60 backdrop-blur-2xl">
                        ✦︎
                    </span>
                    <span className="text-[160px] -mb-[300px] font-inter font-bold text-blue-700 blur-sm">
                        ✦︎
                    </span>
                    <span className="text-9xl font-inter -mt-[150px] font-bold text-blue-700 blur-sm">
                        ✦︎
                    </span>
                    <span className="text-[250px] -mt-[110px] -mr-[80px] font-inter font-bold text-blue-700">
                        ✦︎
                    </span>
                </div>

                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-blue-700 via-white/60 to-transparent z-20 pointer-events-none blur-2xl" />
                {/* Bottom Blur Mask */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-700 via-white/60 to-transparent z-20 pointer-events-none" />

                <div>
                    <motion.div
                        style={{
                            y: useTransform(
                                useScroll({ target: comingSoonRef, offset: ['start end', 'end start'] }).scrollYProgress,
                                [0.2, 0.8],
                                ['100px', '-500px']
                            ),
                            filter: blurAmount
                        }}
                        className="w-full px-4 flex justify-center"
                    >
                        <div className="w-full max-w-xs md:max-w-3xl text-center break-words text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter font-bold text-blue-700">
                            Something cool is coming soon!
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>

    );
};

export default ComingSoon