
import { Link } from "react-router-dom";

const Home = () => {
  

    return(
        <div
        className="home min-h-screen py-0 lg:min-h-screen bg-no-repeat bg-cover flex flex-col justify-evenly lg:flex-row lg:items-center  max-w-screen-desktop mx-auto w-full min-w-[100vw} text-white loadingAnimation"
        >
          <div className="text-neutral text-center lg:text-left mb-24 mt-36  lg:mt-0 lg:mb-0 fadeAnimation">
            <h5 className="font-BarlowCond text-opacity-5 md:text-xl lg:text-3xl tracking-wide md:tracking-wider lg:tracking-widest">SO, YOU WANT TO TRAVEL TO</h5>
            <h1 className="font-Bellefair text-7xl md:text-[150px] my-3">SPACE</h1>
            <p className="font-Barlow leading-7 lg:text-lg lg:leading-8 mx-auto px-14 lg:px-0 lg:pr-10 lg:max-w-xl">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div>
            <Link to="/destination" 
            className="font-Bellefair tracking-wide text-xl w-36 h-36 rounded-full bg-neutral text-primary flex justify-center items-center md:text-3xl md:w-60 md:h-60 md:tracking-wider lg:w-72 lg:h-72 mx-auto  mb-10 lg:mb-0 lg:flex-grow shadowstyle"
            >EXPLORE</Link>
          </div>
        </div>
    )
    }
    
    export default Home;