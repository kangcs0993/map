import {useState} from "react"
import {Map, MapMarker} from "react-kakao-maps-sdk"
import useKakaoLoader from "../useKakaoLoader.js"
// const {kakao} = window


export default function MapComponent({
    locations
}){
    useKakaoLoader()

    return(
        <Map center={{lat: 37.566826, lng: 126.9786567}}
             level={5}
             style={{
                width: "100%",
                height: "350px",
             }}
        >
        </Map>
    )
}