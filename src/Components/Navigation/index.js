import React from "react";
import Logo from "../../assets/shared/logo.svg";
import Close from "../../assets/shared/icon-close.svg";
import Hamburger from "../../assets/shared/icon-hamburger.svg";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
    const showNav = () => {
        const navigation = document.querySelector('.Nav');
        const ham = document.querySelector('.hamburger');
        navigation.style.display = 'flex';
        ham.style.display = 'none'
    }

    const hideNav = () => {
        const navigation = document.querySelector('.Nav');
        const ham = document.querySelector('.hamburger');
        navigation.style.display = 'none';
        ham.style.display = 'block'
    }

    return(
        <div className="w-full fixed flex items-start md:items-center lg:mt-10 z-50 top-0 left-2/4 max-w-screen-desktop -translate-x-1/2 ">
            <div className=" w-full flex flex-row justify-between items-center px-4 pt-3">
                <Link to="/">
                    <img 
                        src={Logo}
                        alt=""  
                    />
                </Link>
                    <img 
                        className="cursor-pointer hamburger md:hidden"
                        src={Hamburger} 
                        alt='' 
                        onClick={showNav}
                    />
            </div>
            <hr className="hidden lg:block w-[150%] -mr-3 xl:w-[700%] xl:-mr-40 relative z-20"/>

            <div className=" flex-col backdrop-blur-lg bg-white/30 h-screen Nav w-full py-8 md:py-0 md:w-auto md:h-full md:bg-primary/30 md:px-12  hidden md:flex"> 
                <img 
                    className="cursor-pointer w-5 self-end mr-6 md:hidden"
                    src={Close} 
                    alt=""
                    onClick={hideNav}
                />
                <div className="mt-16 font-BarlowCond uppercase flex items-start flex-col md:mt-0 md:flex-row md:w-[450px] md:h-24 justify-between md:items-center xl:w-[830px] xl:pr-40 xl:pl-32 ">
                        <NavLink to="/" className={({isActive}) =>isActive ?"navstyle current":"navstyle link"}>
                            <span className="font-bold pr-3 md:hidden lg:inline "
                            >00</span>home
                        </NavLink>
                        <NavLink to="/destination" className={({isActive}) =>isActive ?"navstyle current":"navstyle link"}>
                            <span className="font-bold pr-3 md:hidden lg:inline "
                            >01</span>destination
                        </NavLink>
                        <NavLink to="/crew" className={({isActive}) =>isActive ?"navstyle current":"navstyle link"}>
                            <span className="font-bold pr-3 md:hidden lg:inline "
                            >02</span>crew
                        </NavLink>
                        <NavLink to="/technology" className={({isActive}) =>isActive ?"navstyle current":"navstyle link"}>
                            <span className="font-bold pr-3 md:hidden lg:inline "
                            >03</span>technology
                        </NavLink>

                    
                </div>
            </div>
        </div>
    )
}
export default Navigation;