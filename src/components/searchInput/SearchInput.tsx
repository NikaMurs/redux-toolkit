import { useDispatch } from 'react-redux';
import './searchInput.css'
import {action} from './action'

export default function SearchInput() {
    const dispatch = useDispatch()

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const search = formData.get('search');
        //@ts-ignore
        dispatch(action(search as string))
    }

    return (
        <form className='SearchInput' onSubmit={onSubmit}>
            <input type="text" name='search' placeholder='Catch me if you...' />
            <button>Найти</button>
        </form>
    )
}