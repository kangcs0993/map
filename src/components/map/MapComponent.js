import Map from "./Map";

export default function MapComponent({
    locations
}){
    const mapMarkers = locations.map((location) => {
        return <Map location={location}></Map>
    })

    return(
        <>
            {mapMarkers}
        </>
    )
}