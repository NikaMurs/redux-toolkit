import './card.css'
import { FilmItemType, StateType } from '../../types'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../../redux/filmsReducer'
import { useEffect, useState } from 'react'

export default function Card({ item }: { item: FilmItemType }) {
    const { favorites } = useSelector((state: StateType) => state.films)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [cardStarClass, setCardStarClass] = useState('fa-regular fa-star cardStar')

    function onClickFav(e: React.MouseEvent) {
        e.stopPropagation();
        
        if (cardStarClass === 'fa-regular fa-star cardStar'){
            dispatch(addToFavorites(item))
            setCardStarClass('fa-solid fa-star cardStar')
        } else {
            dispatch(removeFromFavorites(item))
            setCardStarClass('fa-regular fa-star cardStar')
        }


    }

    useEffect(() => {
        favorites.map((el) => {
            if (el.imdbID === item.imdbID) {
                setCardStarClass('fa-solid fa-star cardStar')
            }
        })
    }, [])

    return (
        <div className='Card' onClick={() => { navigate(`/films/${item.imdbID}`) }}>
            <i className={cardStarClass} onClick={onClickFav}></i>
            <img className='cardImg' src={item.Poster} alt="" />
            <div className='cardInfo'>
                <p className='cardTitle'>{item.Title}</p>
                <p className='cardYear'>Year: {item.Year}, Type: {item.Type}</p>

            </div>
        </div>
    )
}