import { NavLink } from "react-router-dom"
import { buildLinkClass } from "../../helpers/buildLinkClass"
import css from './Header.module.css'

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to='/' className={buildLinkClass}>Home</NavLink>
        <NavLink to='/login' className={buildLinkClass}>Login</NavLink>
        <NavLink to='/register' className={buildLinkClass}>Registration</NavLink>
      </nav>
    </header>
  )
}

export default Header