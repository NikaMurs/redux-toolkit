import './card.css'
import { FilmItemType } from '../../types'

export default function Card({item}: {item: FilmItemType}) {
    return (
        <div className='Card'>
            <img className='cardImg' src={item.Poster} alt="" />
            <div className='cardInfo'>
                <p className='cardTitle'>{item.Title}</p>
                <p className='cardYear'>Year: {item.Year}, Type: {item.Type}</p>
                
            </div>
        </div>
    )
}