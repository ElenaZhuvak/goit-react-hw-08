import { NavLink } from 'react-router-dom';
import { buildLinkClass } from '../../helpers/buildLinkClass';
import css from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu'

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);


  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>

        {isLoggedIn && (<>
        <NavLink to='/contacts' className={buildLinkClass}>Contacts</NavLink>
        </>) }
        {isLoggedIn && (<UserMenu />)} 

        {!isLoggedIn && (
          <>
            <NavLink to="/contacts" className={buildLinkClass}>
              Contacts
            </NavLink>
            <NavLink to="/login" className={buildLinkClass}>
              Login
            </NavLink>
            <NavLink to="/register" className={buildLinkClass}>
              Registration
            </NavLink>
          </>
        )}

      </nav>
    </header>
  );
};

export default Header;
