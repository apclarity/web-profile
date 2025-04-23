import { useRef } from "react";

function Header() {
    const boundingRef = useRef(null);

    const handleMouseEnter = (ev) => {
        boundingRef.current = ev.currentTarget.getBoundingClientRect();
    };

    const handleMouseLeave = (ev) => {
        boundingRef.current = null;
        ev.currentTarget.style.transform = "";
    };

    const handleMouseMove = (ev) => {
        if (!boundingRef.current) return;
        const x = ev.clientX - boundingRef.current.left;
        const y = ev.clientY - boundingRef.current.top;
        const xPercent = x / boundingRef.current.width;
        const yPercent = y / boundingRef.current.height;

        const xRotation = (0.5 - yPercent) * 20;
        const yRotation = (xPercent - 0.5) * 20;

        ev.currentTarget.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.02)`;
    };
    return (
        <div className="grid grid-cols-1 items-center">
            <div
                className="wrapper-header bg-blue-700 transition-transform duration-200 ease-in-out [transform-style:preserve-3d] [perspective:1000px]"
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <h2 className="font-extralight text-2xl sm:text-3xl md:text-5xl text-white">
                    Hi, my name is <span>Andreas Peter C</span> !
                </h2>
                <div className="font-inter mt-10 text-2xl sm:text-4xl md:text-8xl font-bold leading-tight tracking-[-1%] text-white">
                    Frontend Developer & <br />
                    Design Enthusiast with a Vision for Visual Web Experiences
                </div>
                {/* <div className="mt-10 text-xl font-medium">Try Playground!</div>
                <button className="rounded-full mt-3 bg-black text-xl text-white p-3 cursor-pointer hover:bg-black/80">
                    Playground
                </button> */}
            </div>
        </div>

    )
}

export default Header