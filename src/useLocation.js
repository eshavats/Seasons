import { useState, useEffect} from "react";

export default () => {
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const fetchWeather = () => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => setLat(position.coords.latitude),
            (err) => setErrorMessage(err.message)  
        );
    }

    useEffect(() => {
        fetchWeather()
    }, []);

    return [lat, errorMessage];
}