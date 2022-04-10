import axios from 'axios'
import { API_KEY } from '../constans/constans'

export const getCities = async (q) => {
    const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${q}`)
    return response.data;
}

export const getCurrentTemp = async (locationKey) => {
    const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`)
    return { temp: response.data[0].Temperature.Imperial.Value, iconId: response.data[0].WeatherIcon, text: response.data[0].WeatherText };
}

export const getFiveDaysTemp = async (locationKey) => {
    const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`)
    return response.data.DailyForecasts;
} 