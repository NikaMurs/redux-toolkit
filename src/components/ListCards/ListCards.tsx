import Card from '../card/Card'
import './listCards.css'
import { useSelector } from 'react-redux'
import { StateType } from '../../types'


export default function ListCards() {
    const { search, loading } = useSelector((state: StateType) => state.films)
    return (
        <div className='ListCards'>
            {loading ?
                <div className='loading'><i className="fa-solid fa-spinner"></i><p>Loading...</p></div> :
                (search.Response === 'True' ? search.Search.map((item) => {
                    return <Card item={item} key={item.imdbID} />
                }) : 
                <div className='failSearch'>Ничего не нашли<br></br>Переформулируйте запрос или поищите что-нибудь ещё</div>)}
        </div>
    )
}