import { actions } from '../../constans/constans'

export const addCityToFavorites = (city) => {
    return { type: actions.ADD_CITY, payload: { city } }
}

export const deleteCityFromFavorites = (city) => {
    return { type: actions.DELETE_CITY, payload: { city } }
}

export const uploadFirstCity = (cityName) => {
    return { type: actions.UPLOAD_FIRST_CITY, payload: { cityName } }
}

