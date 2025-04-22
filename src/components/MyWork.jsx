import CardWork from "./CardWork"

const MyWork = () => {

    return (
        <div className="py-20">
            <div className="max-w-xl mx-auto">
                <div className="font-inter text-5xl md:text-6xl lg:text-7xl font-bold">My <i className="font-arapey-italic text-6xl md:text-7xl lg:text-8xl font-extrabold">Work</i></div>
                <hr className="border-8 text-blue-700 -mt-5" />
            </div>
            <div>
                <CardWork />
            </div>
        </div>
    )
}

export default MyWork