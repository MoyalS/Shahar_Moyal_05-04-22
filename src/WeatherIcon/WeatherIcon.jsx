import { Box } from '@material-ui/core';
import './weatherIcon.css'

const WeatherIcon = (props) => {
    const renderWeatherIcon = () => {
        const iconId = props.icon < 10 ? `0${props.icon}` : `${props.icon}`;

        return (
            <img src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${iconId}-s.png`} />
        )
    }

    return (
        <Box className="weatherIcon">
            {renderWeatherIcon()}
        </Box>
    )
}

export default WeatherIcon;