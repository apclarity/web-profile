import { motion } from 'framer-motion'

const AboutMe = () => {
    return (
        <div className="max-w-xl mx-auto py-10">
            <div className="inline-flex items-center gap-3">
                <h1 className="flex justify-start font-extralight text-2xl text-black">
                    Know about me
                </h1>
                <span className="wave text-2xl md:text-3xl -mb-7 md:-mb-9 -ml-2 z-5">👋</span>
                <img className="rounded-xl w-[50px] md:w-[60px] -ml-6 md:-ml-8 shadow-md" src="/linkedin_pp.jpg" alt="Profile" />
            </div>

            <p className="font-bold text-center text-5xl mt-5">
                <i className="font-arapey-italic">Frontend Developer</i> with a Passion for Design
            </p>
            <p className="mt-10 font-medium text-xl text-center">I'm a frontend developer with a strong passion for web design and crafting visually engaging digital experiences. I believe in maintaining a healthy balance between work and life, which fuels my creativity and productivity. Continuously curious, I'm dedicated to learning and exploring technologies that bridge functionality with aesthetics. As long as the opportunity to grow exists, I’ll never stop learning.</p>
            {/* <div className='flex justify-center'>

                <motion.button
                    whileHover={{
                        scale: 1.1,
                        y: -5,
                        transition: { type: "spring", stiffness: 300 }
                    }}
                    style={{ display: "inline-block" }}
                    className="rounded-full bg-black text-md font-bold px-5 text-white p-2 cursor-pointer hover:bg-black/80 mt-10">
                    Read more
                </motion.button>
            </div> */}


            {/* <p className="mt-5 font-medium text-xl text-center ">a Front-End Developer with over three years of experience building fast, responsive, and user-centric web applications. <br />

                I specialize in Vue.js, React, JavaScript, Tailwind CSS (or other UI frameworks), RESTful APIs, and responsive web design. My technical toolkit also includes version control (Git/GitHub) and modern development tools like Vite and Pinia. I’ve successfully developed and maintained several Single Page Applications (SPAs) that emphasize performance, scalability, and seamless user experiences. <br />

                I was deeply involved in the full product lifecycle—from ideation to deployment. I led the development of multiple web platforms, collaborated cross-functionally with product and design teams, and ensured clean code practices through proper version control and documentation. <br />

                Beyond technical skills, I’m passionate about continuous learning, open communication, and collaborative problem-solving. I believe these values are essential to creating effective and innovative digital solutions.
            </p> */}
        </div>
    )
}

export default AboutMe