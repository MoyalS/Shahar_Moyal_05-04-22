import { days } from '../constans/constans'

export const convertDateToDay = (stringDate) => {
    const date = new Date(stringDate.slice(0, 10))
    return days[date.getDay()];
}
