import {useState} from "react"

export default function Location({
    index,
    locations,
    location,
    checkList
}){
    const locationCheckbox = (
        <div className="locationCheckbox">
            <input type="checkbox" checked={location.checked} onChange={(e) => toggleLocation(e)}></input>
            <span>{location.location}</span>
        </div>
    )

    function toggleLocation(e){
        locations[index]["checked"] = e.target.checked
        checkList(locations)
    }

    return(
        <>
            {locationCheckbox}
        </>
    )
}