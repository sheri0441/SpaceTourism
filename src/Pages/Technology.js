import { useState } from 'react';
import VechicleL from '../assets/technology/image-launch-vehicle-landscape.jpg';
import CapsuleL from '../assets/technology/image-space-capsule-landscape.jpg';
import SpaceportL from '../assets/technology/image-spaceport-landscape.jpg';
import VechicleP from '../assets/technology/image-launch-vehicle-portrait.jpg';
import CapsuleP from '../assets/technology/image-space-capsule-portrait.jpg';
import SpaceportP from '../assets/technology/image-spaceport-portrait.jpg';
import TechnologyNav from '../Components/TechnologyNav';
import data from '../data.json';

const technology = data.technology;

const Technology = () => {
    const [route , setroute] = useState("launch vehicle");
    const item = technology.find((aa)=>aa.name.toLowerCase() === route );
    const {name , description } = item;

    const changeRoute = (ship) => setroute(ship);


    let imageP;
    if(route === "launch vehicle") {
        imageP = VechicleP
    } else if(route === "spaceport") {
        imageP = CapsuleP
    } else{
        imageP = SpaceportP
    }
    let imageL;
    if(route === "launch vehicle") {
        imageL = VechicleL
    } else if(route === "spaceport") {
        imageL = CapsuleL
    } else{
        imageL = SpaceportL
    }
    return (
        <div className="technology min-h-screen md:h-auto lg:h-screen w-screen bg-cover flex justify-start flex-col md:flex-col-reverse text-center  lg:text-left lg:justify-center text-white max-w-screen-desktop mx-auto">
            <div className="w-full mx-auto mt-24 max-w-screen-desktop fadeAnimation">
                <p className="font-BarlowCond md:ml-[10%] uppercase tracking-wider mb-8 md:tracking-wider md:text-xl md:text-left lg:tracking-widest lg:text-3xl lg:ml-20 desktop:ml-40"><span className="text-neutral/30 mr-5 font-bold">03</span>Space Launch 101</p>
                <div className="md:flex md:flex-col lg:flex-row-reverse lg:items-center  md:mb-0">
                    <div className="mx-auto h-full mt-3 hidden lg:block w-full ml-10 max-h-[527px] max-w-[515px] lg:mx-0 lg:ml-auto ">
                        <img src={imageP} alt="" />
                    </div>
                    <div className="mx-auto h-full mt-3 block lg:hidden w-full">
                        <img className='w-full' src={imageL} alt="" />
                    </div>
                    <div className="mx-auto lg:mx-0  flex flex-col-reverse  mb-20 md:mb-24 lg:flex-row-reverse lg:items-center  fadeAnimation">
                        <div className="md:mt-5 lg:h-full lg:mt-0 lg:w-[470px] lg:mr-auto w-4/5 md:max-w-[458px]">
                            <p className="font-BarlowCond text-sm md:text-base uppercase text-neutral/40 md:mt-5 lg:mt-0">the technology...</p>
                            <p className="font-Bellefair text-2xl md:text-5xl uppercase md:mt-5 lg:mt-4">{name}</p>
                            <p className="mx-auto leading-6 text-neutral/75 px-5 lg:px-0 md:mt-5 lg:mt-7">{description}</p>
                        </div>
                        <TechnologyNav changeRoute={changeRoute} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology;