
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
import './header.css'
import { useState } from 'react';
import { pages } from '../constans/constans'

const Header = () => {

    const [currentPage, setCurrentPage] = useState(pages.CITIES_TEMP)
    const handleHomeClick = () => {
        setCurrentPage(pages.CITIES_TEMP)
    }
    const handleFavoritesClick = () => {
        setCurrentPage(pages.FAVORITES)
    }

    const renderIcons = () => {
        return (
            <div id='icons'>
                <IconButton>
                    <Link className='linkTo' to="/" onClick={handleHomeClick}>
                        <WbSunnyIcon className='icon' />
                    </Link>
                </IconButton>
                <IconButton>
                    <Link className='linkTo' to="/favorites" onClick={handleFavoritesClick}>
                        <FavoriteIcon className='icon' />
                    </Link>
                </IconButton>
            </div>
        )
    }

    return (
        <div className="header">
            <div id="currentPge">
                {currentPage}
            </div>
            {renderIcons()}
        </div>
    )
}

export default Header 