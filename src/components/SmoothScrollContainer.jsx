// components/SmoothScrollContainer.jsx
import { useEffect, useRef } from "react"
import Lenis from "@studio-freight/lenis"

const SmoothScrollContainer = ({ children }) => {
    const lenisRef = useRef(null)

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            smooth: true,
            smoothWheel: true,
        })

        lenisRef.current = lenis
        window.lenis = lenis;

        const raf = (time) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return <div>{children}</div>
}

export default SmoothScrollContainer
