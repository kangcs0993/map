import {useState} from "react";
import Location from "./Location";
import MapComponent from "../map/MapComponent";

export default function LocationComponent(){
    const [locations, setLocations] = useState([
		{
			location: "서울(seoul)",
			position: {
				lat: 37.5519,
				lng: 126.9918
			},
			checked: false
		},
		{
			location: "부산(busan)",
			position: {
				lat: 35.2100,
				lng: 129.0689
			},
			checked: false
		},
		{
			location: "대전(daejeon)",
			position: {
				lat: 36.3398,
				lng: 127.3940
			},
			checked: false
		},
		{
			location: "대구(daegu)",
			position: {
				lat: 35.8294,
				lng: 128.5655
			},
			checked: false
		},
		{
			location: "제주(jeju)",
			position: {
				lat: 33.4996,
				lng: 126.5312
			},
			checked: false
		}
	])

    function checkList(locations){
        setLocations([...locations])
    }
    
    const locationList = locations.map((location, index) => {
        return <Location key={index}
                         index={index}
                         locations={locations}
                         location={location}
                         checkList={checkList}
                >
                </Location>
    })

    return(
        <>
            <div className="locationContainer">
                <span>location</span>
                {locationList}
            </div>

            <MapComponent locations={locations}></MapComponent>
        </>
    )
}