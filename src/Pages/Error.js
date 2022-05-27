import { Link } from "react-router-dom";

const Error = () => {
    return(
        <div className="home min-h-screen py-0 lg:min-h-screen bg-no-repeat bg-cover flex flex-col justify-evenly items-center  max-w-screen-desktop mx-auto w-full min-w-[100vw} text-white">
            <h1 className="text-white text-6xl">Opps! Page not found.</h1>
            <Link to="/" className="bg-neutral/90 p-4 rounded-sm text-primary font-BarlowCond font-medium text-2xl max-w-xs">Back to Home</Link>
        </div>
    )
}

export default Error;