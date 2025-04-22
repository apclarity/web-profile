
import { useState, useEffect } from "react"

const Card = ({ title }) => {
    const [hasliked, setHasliked] = useState(false)
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`${title} has been liked: ${hasliked}`)
    }, [hasliked])

    return (
        <div className="card" onClick={() => setCount(count + 1)}>
            <h2>{title} <br /> {count || null}</h2>
            <button className="" onClick={() => { setHasliked(!hasliked) }}>{hasliked ? '🧡' : '🤍'}</button>
        </div>
    )
}

const App = () => {
    return (
        <div className="card-container">
            <Card title="Star wars" />
            <Card title="Avatar" />
        </div>
    )
}


