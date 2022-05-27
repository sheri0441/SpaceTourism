import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation";

const SharedLayout = () => {
    return(
        <>
        <Navigation/>
        <Outlet/>
        </>
    )
}

export default SharedLayout;