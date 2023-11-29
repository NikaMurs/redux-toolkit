import { useSelector } from 'react-redux'
import './favorites.css'
import { StateType } from '../../types'
import Card from '../card/Card'

export default function Favorites(){
    const { favorites } = useSelector((state: StateType) => state.films)

    return (
        <div className='Favorites'>
            {favorites.length === 0 ?
            <p className='favoritesEmpty'>Здесь пока ничего нет<br />Давайте поищем фильмы?</p> :
            favorites.map((el)=>{
                return <Card item={el} />
            })}
        </div>
    )
}