import { NavLink } from "react-router-dom"
import { buildLinkClass } from "../../helpers/buildLinkClass"
import css from './Header.module.css'
import { useDispatch, useSelector } from "react-redux"
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors"
import { logout } from "../../redux/auth/operations"

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  return (
    <header className={css.header}>

      <nav className={css.nav}>
        <NavLink to='/' className={buildLinkClass}>Home</NavLink>

      {isLoggedIn && <div>{user.email}</div>}
      {isLoggedIn && (<>
        <NavLink to='/contacts' className={buildLinkClass}>Contacts</NavLink>
        </>) }
      
      {!isLoggedIn && (
        <>
         <NavLink to='/login' className={buildLinkClass}>Login</NavLink>
         <NavLink to='/register' className={buildLinkClass}>Registration</NavLink>
        </>
      )}

      {isLoggedIn && <button onClick={() => dispatch(logout())}>Logout</button>}
      </nav>

    </header>
  )
}

export default Header