import { useDispatch } from 'react-redux';
import './searchInput.css'

export default function SearchInput() {
    const dispatch = useDispatch()

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const search = formData.get('search');
        dispatch({
            type: 'SEARCH',
            payload: search
        })
    }

    return (
        <form className='SearchInput' onSubmit={onSubmit}>
            <input type="text" name='search' placeholder='Терминатор...' />
            <button>Найти</button>
        </form>
    )
}