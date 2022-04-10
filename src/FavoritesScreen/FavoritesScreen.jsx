import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import CityCard from '../CityCard/CityCard'
import './favoritesScreen.css'

const FavoritesScreen = () => {
    const favoritesList = useSelector(state => state.city.favoritesList)

    return (
        <Box className='favoritesList'>
            {favoritesList.map((city) => <CityCard cityName={city.name} currentTemp={city.currentTemp} />)}
        </Box>
    )
}

export default FavoritesScreen 