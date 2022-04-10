import { Card, CardContent, Typography } from "@material-ui/core";
import './cityCard.css'
import { Link } from "react-router-dom";
import { uploadFirstCity } from '../redux/actions/city'
import { useDispatch } from 'react-redux'
import WeatherIcon from '../WeatherIcon/WeatherIcon'

const CityCard = (props) => {
  const dispatch = useDispatch();

  const onClickCard = () => {
    dispatch(uploadFirstCity(props.cityName))
  }

  return (
    <Card className="cityCard">
      <Link className="linkItem" to="/" onClick={onClickCard} >
        <CardContent >
          <Typography variant="h5">{props.cityName}</Typography>
          <WeatherIcon icon={props.currentTemp.iconId} />
          <Typography variant="h6">{props.currentTemp.temp} °F </Typography>
        </CardContent>
      </Link>
    </Card>
  )
}

export default CityCard 