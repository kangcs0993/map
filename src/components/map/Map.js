export default function Map({
    location
}){
    return(
        <div>
            {location.checked && (
                <span>
                    {location.location}
                </span>
            )}
        </div>
    )
}