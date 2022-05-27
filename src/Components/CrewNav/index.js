

const CrewNav = ({changeRoute}) => {
    return (
        <div className="crewOption mx-auto my-8 w-24 lg:w-32 flex justify-between md:my-10 lg:mb-24 lg:mx-0">
            <input type="radio" name="crew" value="commander" id="commander" defaultChecked onClick={() => changeRoute('commander')} />
            <label htmlFor="commander">Commander</label>
            <input type="radio" name="crew" value="specialist" id="specialist" onClick={() => changeRoute('mission specialist')} />
            <label htmlFor="specialist">specialist</label>
            <input type="radio" name="crew" value="pilot" id="pilot" onClick={() => changeRoute('pilot')} />
            <label htmlFor="commander">pilot</label>
            <input type="radio" name="crew" value="engineer" id="engineer" onClick={() => changeRoute('flight engineer')} />
            <label htmlFor="engineer">engineer</label>
        </div>
    )
}

export default CrewNav;