import { Box, Card, CardContent, Typography } from "@material-ui/core";
import './dayCard.css'
import WeatherIcon from '../WeatherIcon/WeatherIcon'

const DayCard = (props) => {
  return (
    <Box className="dayCard">
      <Card>
        <CardContent>
          <Typography id="day">{props.date}</Typography>
          <WeatherIcon icon={props.icon} />
          <Typography id="temp" >{props.min} - {props.max} °F </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default DayCard 