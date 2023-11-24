import { NavLink } from 'react-router-dom'
import './menu.css'

export default function Menu() {
  function isActiveFunc(isActiveElement: boolean) {
    if (isActiveElement) {
        return 'menuItem active'
    } else {
        return 'menuItem'
    }
}

  return (
    <ul className='Menu'>
      <li>
        <NavLink className={({ isActive }) => isActiveFunc(isActive)} to='search'>
          <i className="fa-solid fa-magnifying-glass icon"></i>
          Поиск
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => isActiveFunc(isActive)} to='/favourites'>
          <i className="fa-regular fa-star icon"></i>
          Избранное
        </NavLink>
      </li>
    </ul>
  )
}