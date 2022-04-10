import { actions } from '../../constans/constans'

const INITIAL_STATE = {
   favoritesList:[],
   cityName: 'Tel Aviv'
}

export default function city(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.ADD_CITY: {
            let {city} = action.payload;
            let favoritesList = state.favoritesList;
            
            favoritesList.push(city);

            return { ...state, favoritesList }
        }
        case actions.DELETE_CITY: {
            let {city} = action.payload;
            let favoritesList = state.favoritesList;

            favoritesList.splice(favoritesList.indexOf(elem=>elem===city))

            return { ...state, favoritesList }
        }
        case actions.UPLOAD_FIRST_CITY: {
            let {cityName} = action.payload;

            return { ...state, cityName }
        }
        
        default: { return state }
    }
}