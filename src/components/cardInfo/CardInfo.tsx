import { useParams } from 'react-router-dom'
import './cardInfo.css'
import { action } from './action'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../../types'
import { useEffect } from 'react'




export default function CardInfo() {
    const { filmInfo, loading } = useSelector((state: StateType) => state.films)
    const { filmID } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        //@ts-ignore
        dispatch(action(filmID as string))
    }, [])


    return (
        <div className='CardInfo'>
            {loading ?
                (
                    <div className='loading'><i className="fa-solid fa-spinner"></i><p>Loading...</p></div>
                ) : (
            <>
                <img className='cardInfoImg' src={filmInfo.Poster} alt="" />
                <div className='cardInfoInfo'>
                    <p className='cardInfoTitle'>{`${filmInfo.Title} (${filmInfo.Year})`}</p>
                    <p className='cardInfoGenre'><span>Жанр: </span>{filmInfo.Genre}</p>
                    <p className='cardInfoRuntime'><span>Продолжительность: </span>{filmInfo.Runtime}</p>
                    <p className='cardInfoDirector'><span>Режиссер: </span>{filmInfo.Director}</p>
                    <p className='cardInfoActors'><span>Актеры: </span>{filmInfo.Actors}</p>
                    <p className='cardInfoRating'><span>Рейтинг: </span>{filmInfo.imdbRating}</p>
                </div>
            </>
            )
            }
        </div>
    )
}