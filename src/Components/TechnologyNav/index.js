
const TechnologyNav = ({changeRoute}) => {
    return(
        <div className="technologyOption flex justify-between w-40 mx-auto mt-9 mb-7 lg:flex-col md:text-2xl lg:text-3xl font-Bellefair md:w-52 lg:w-20 lg:h-80 lg:my-0 lg:mx-20 desktop:ml-40 ">
            <input type="radio" name="ship" value="vehicle" id="vehicle" defaultChecked />
            <label htmlFor="vehicle" onClick={()=>changeRoute("launch vehicle")}>1</label>
            <input type="radio" name="ship" value="spaceport" id="spaceport" />
            <label htmlFor="spaceport" onClick={()=>changeRoute("spaceport")}>2</label>
            <input type="radio" name="ship" value="capsule" id="capsule" />
            <label htmlFor="capsule" onClick={()=>changeRoute("space capsule")}>3</label>
        </div>
    )
}

export default TechnologyNav;