import {useState} from "react"

export default function App(){
	// const [locations, setLocations] = useState([]);

	const locations = [
		{
			location: "서울(seoul)",
			position: {
				lat: 37.5519,
				lng: 126.9918
			}
		},
		{
			location: "부산(busan)",
			position: {
				lat: 35.2100,
				lng: 129.0689
			}
		},
		{
			location: "대전(daejeon)",
			position: {
				lat: 36.3398,
				lng: 127.3940
			}
		},
		{
			location: "대구(daegu)",
			position: {
				lat: 35.8294,
				lng: 128.5655
			}
		},
		{
			location: "제주(jeju)",
			position: {
				lat: 33.4996,
				lng: 126.5312
			}
		}
	]

	
}