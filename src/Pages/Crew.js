import { useState } from "react";
import Commander from '../assets/crew/image-douglas-hurley.webp';
import Engineer from '../assets/crew/image-anousheh-ansari.webp';
import Specialist from '../assets/crew/image-mark-shuttleworth.webp';
import CrewNav from "../Components/CrewNav";
import Pilot from '../assets/crew/image-victor-glover.webp';
import data from '../data.json'

const crew = data.crew;

const Crew = () => {
    const [route , setroute] = useState("commander");
    const item = crew.find((aa)=>aa.role.toLowerCase() === route );
    const {name , bio, role } = item;

    const changeRoute = (member) => setroute(member);
    
    let image;
    if(route === "commander") {
        image = Commander
    } else if(route === "mission specialist") {
        image = Specialist
    } else if(route === "pilot") {
        image = Pilot
    } else{
        image = Engineer
    }

    let startingX = 0;
    let movingX = 0;
    const startTouch = (event) => {
        startingX = event.touches[0].clientX;
    }
    const movingTouch = (event) => {
        movingX = event.touches[0].clientX;
    }
    const endTouch = () => {
        if (startingX + 50 > movingX && movingX !== 0) {
            if(route === 'commender'){
                changeRoute('pilot')
            } else if (route === 'pilot'){
                changeRoute('engineer')
            } else if (route === 'engineer') {
                changeRoute('specilist')
            } else {
                changeRoute('commender')
            }
        } else if (startingX + 50 < movingX && movingX !== 0) {
            if(route === 'commender'){
                changeRoute('specilist')
            } else if (route === 'specilist'){
                changeRoute('engineer')
            } else if (route === 'engineer') {
                changeRoute('pilot')
            } else {
                changeRoute('commender')
            }
        };
        startingX = movingX;
    }
    
    return (
        <div className="crew min-h-screen md:h-auto lg:h-screen w-screen bg-cover flex justify-start flex-col md:flex-col-reverse text-center  lg:text-left lg:justify-between 2xl:justify-center text-neutral max-w-screen-desktop mx-auto" onTouchStart={startTouch} onTouchMove={movingTouch} onTouchEnd={endTouch}>
            <div className="w-4/5 mx-auto mt-24 max-w-screen-desktop fadeAnimation">
                <p className="font-BarlowCond text-opacity-5 md:text-xl lg:text-3xl tracking-wide md:tracking-wider lg:tracking-widest uppercase md:text-left lg:justify-between"><span className="text-neutral/30 mr-5 font-bold">02</span>Meet your crew</p>
                <div className="md:flex md:flex-col-reverse lg:flex-row-reverse lg:justify-between md:mb-0">

                    <div className="mx-auto overflow-hidden lg:flex ">
                        <img className=" h-56 mt-3 md:h-[532px] lg:max-h-[607px] mx-auto" src={image} alt="" />  
                        <hr className="md:hidden"/>
                    </div>
                    <div className="w-full max-w-[615px] flex flex-col-reverse md:flex-col lg:mt-10 lg:pt-20 mx-auto">
                        <div className="md:mt-5 lg:h-full lg:mt-auto ">
                            <p className="font-Bellefair md:text-2xl lg:text-4xl uppercase text-neutral/40 md:mt-5 lg:mt-0 md:hidden lg:block">{role}</p>
                            <h1 className="font-Bellefair mt-2 mb-4 text-2xl md:text-5xl lg:text-6xl uppercase md:mt-5 lg:mt-4 lg:mb-7">{name}</h1>
                            <p className="mx-auto leading-6 text-neutral/75 px-5 lg:px-0 md:mt-5 ">{bio}</p>
                        </div>
                        <CrewNav changeRoute={changeRoute} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crew;