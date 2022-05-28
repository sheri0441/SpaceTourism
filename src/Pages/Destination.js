import { useState } from "react";
import DestinationNav from "../Components/DestinatinNav";
import Moon from "../assets/destination/image-moon.webp"
import Mars from "../assets/destination/image-mars.webp"
import Europa from "../assets/destination/image-europa.webp"
import Titan from "../assets/destination/image-titan.webp"
import data from '../data.json'

const destination = data.destinations

const Destination = () => {
    const [route , setroute] = useState("moon")

    const item = destination.find((aa)=>aa.name.toLowerCase() === route );
    const {name , description, distance, travel } = item;

    const changeRoute = (planet) => setroute(planet);

    let image;
    if(route === "moon") {
        image = Moon
    } else if(route === "mars") {
        image = Mars
    } else if(route === "europa") {
        image = Europa
    } else{
        image = Titan
    }

    return (
        <div className="destination min-h-screen md:h-auto lg:h-screen w-screen bg-cover flex justify-start flex-col text-center text-neutral lg:justify-center  lg:text-left max-w-screen-desktop mx-auto loadingAnimation ">
                <div className="w-4/5 mx-auto mt-24 fadeAnimation">
                    <p className="font-BarlowCond text-opacity-5 md:text-xl lg:text-3xl tracking-wide md:tracking-wider lg:tracking-widest uppercase md:text-left"><span className="text-neutral/30 mr-5 font-bold">01</span>Pick your destination</p>
                    <div className="lg:flex lg:justify-evenly lg:items-start mt-10">

                        <div className="lg:mr-10">
                            <img className="mx-auto w-44 mt-8 mb-6 md:w-80 lg:min-w-[445px] lg:mt-0 lg:mb-0" src={image} alt="" />  
                        </div>
                        <div className="lg:w-[445px]" >
                            <DestinationNav changeRoute={changeRoute} />
                            <h1 className="text-6xl font-Bellefair uppercase md:text-7xl mt-8">{name}</h1>
                            <p className="mx-auto leading-6 text-neutral/75 px-5 lg:px-0">{description}</p>
                            <hr className="my-8 border-neutral/25" />
                            <div className="md:flex text-center md:justify-evenly md:mb-7">
                                <div>
                                    <p className="font-Bellefair tracking-wide md:tracking-wider lg:tracking-widest uppercase text-neutral/70">AVG. DISTANCE</p>
                                    <p className="text-3xl uppercase font-Bellefair">{distance} </p>
                                </div>
                                <div>
                                    <p className="font-Bellefair tracking-wide md:tracking-wider lg:tracking-widest uppercase text-neutral/70">Est. travel time</p>
                                    <p className="text-3xl uppercase font-Bellefair">{travel}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Destination;