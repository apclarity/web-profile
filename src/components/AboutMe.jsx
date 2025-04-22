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
        </div>
    )
}

export default AboutMe