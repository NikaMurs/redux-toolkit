import Card from '../card/Card'
import './listCards.css'
import { useSelector } from 'react-redux'
import { StateType } from '../../types'


export default function ListCards(){
    const { search } = useSelector((state: StateType) => state.films)

    return(
        <div className='ListCards'>
            {search.Search.map((item)=>{
                return <Card item={item} key={item.imdbID}/>
            })}
        </div>
    )
}