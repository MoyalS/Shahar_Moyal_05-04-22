import DayCard from '../DayCard/DayCard'
import { useEffect, useState } from 'react'
import './homeScreen.css'
import { TextField, Autocomplete, IconButton } from '@mui/material'
import { Button, Box } from '@material-ui/core'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addCityToFavorites, deleteCityFromFavorites } from '../redux/actions/city'
import { useDispatch, useSelector } from 'react-redux'
import { getCities, getCurrentTemp, getFiveDaysTemp } from '../api/api'
import { convertDateToDay } from '../api/index'

const initial_state = {
    city: {
        name: '',
        key: 0,
        temperature: [],
        currentTemp: { temp: 0, iconID: 0, text: '' },
        isInFavites: false
    }
}

const HomeScreen = () => {
    const [cities, setCities] = useState([])
    const [selectedCity, setSelectedCity] = useState(initial_state.city); 
    const favoritesList = useSelector(state => state.city.favoritesList)
    const firstCityName = useSelector(state => state.city.cityName)
    const dispatch = useDispatch();

    useEffect(() => {
        updateCityParams(firstCityName);
    }, [])

    const loadCities = async (q) => {
        let data = await getCities(q);
        let citiesList = [];

        for (let i = 0; i < data.length; i++) {
            citiesList.push({ key: data[i].Key, name: data[i].LocalizedName });
        }

        setCities([...citiesList]);
    }

    const updateCityParams = async (cityName) => {
        let newCity = selectedCity;

        newCity.name = cityName;
        if (cities.length) {
            newCity.key = (cities.find(city => city.name === cityName)).key;
        } else {
            let data = await getCities(cityName);
            newCity.key = data[0].Key;
        }

        favoritesList && favoritesList.find(city => city.name === cityName ? newCity.isInFavites = true : newCity.isInFavites = false);
        setSelectedCity({ ...newCity });
        updateFiveDaysTemp(newCity.key);
        updateCurrentTemp(newCity.key);
    }

    const updateFiveDaysTemp = async (locationKey) => {
        let temperature = await getFiveDaysTemp(locationKey);
        let city = selectedCity;

        city.temperature = temperature;
        setSelectedCity({ ...city });
    }

    const updateCurrentTemp = async (locationKey) => {
        let temperature = await getCurrentTemp(locationKey);
        let city = selectedCity;

        city.currentTemp = temperature;
        setSelectedCity({ ...city });
    }

    const onClickLike = () => {
        let city = selectedCity;
        city.isInFavites = !selectedCity.isInFavites;
        setSelectedCity({ ...city })
        addOrRemoveFromFavoeites(city);
    }

    const addOrRemoveFromFavoeites = (city) => {
        selectedCity.isInFavites ? dispatch(addCityToFavorites(city)) : dispatch(deleteCityFromFavorites(city))
    }

    const renderInputCity = () => {
        return (
            <div className="autocomplete">
                <Autocomplete
                    options={cities.map(city => city.name)}
                    renderInput={params => (
                        <TextField {...params} label="select city" variant="outlined" />
                    )}
                    style={{ width: 270 }}
                    value={selectedCity.name}
                    onChange={(_event, cityName) => {
                        cityName ? updateCityParams(cityName) : updateCityParams(firstCityName);
                    }}
                    onInputChange={(_event, input) => {
                        loadCities(input);
                    }}
                />
            </div>
        )
    }

    const renderLikeBtn = () => {
        return (
            <div>
                <Button onClick={onClickLike}>
                    <IconButton id={selectedCity.isInFavites ? "addToFavorites" : "removeFromFavorites"} >
                        <FavoriteIcon id="favoriteIcon" />
                    </IconButton>
                </Button>
            </div>
        )
    }

    return (
        <Box id="homeScreen" >
            {renderInputCity()}
            <div id="cityWeatheContant">
                <div id="top">
                    <div id="cityName">{selectedCity.name}</div>
                    {renderLikeBtn()}
                </div>
                <div id="currentTemp">{`${selectedCity.currentTemp.text} - ${selectedCity.currentTemp.temp} °F`}</div>
                <div id="weather">
                    {selectedCity.temperature.map((day) => <DayCard date={convertDateToDay(day.Date)} min={day.Temperature.Minimum.Value} max={day.Temperature.Maximum.Value} icon={day.Day.Icon} />)}
                </div>
            </div>
        </Box>
    )
}

export default HomeScreen 