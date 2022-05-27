

const DestinationNav = ({changeRoute}) => {

    return(
        <div className="planetOption text-sm md:text-base font-BarlowCond uppercase tracking-wide md:tracking-wider flex mx-auto lg:mx-0 justify-between w-60 md:w-72">
            <input type="radio" name="planets" value="moon" id="moon" 
            onClick={() => changeRoute("moon") } defaultChecked/>
            <label className="cursor-pointer text-neutral/50 " htmlFor="moon" checked >Moon</label>
            <input type="radio" name="planets" value="mars" id="mars" 
            onClick={() => changeRoute("mars")} />
            <label className="cursor-pointer text-neutral/50 " htmlFor="mars">Mars</label>
            <input type="radio" name="planets" value="europa" id="europa" onClick={() => changeRoute("europa")} />
            <label className="cursor-pointer text-neutral/50 " htmlFor="europa">Europa</label>
            <input type="radio" name="planets" value="titan" id="titan" 
            onClick={() => changeRoute("titan")} />
            <label className="cursor-pointer text-neutral/50 " htmlFor="titan">Titan</label>
        </div>
    )
}

export default DestinationNav;