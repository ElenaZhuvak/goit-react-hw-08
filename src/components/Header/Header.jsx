import { NavLink } from 'react-router-dom';
import { buildLinkClass } from '../../helpers/buildLinkClass';
import css from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu'
import AuthNav from '../AuthNav/AuthNav';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);


  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>Home</NavLink>
        
        {isLoggedIn && (<>
        <NavLink to='/contacts' className={buildLinkClass}>Contacts</NavLink>
        </>) }
        {isLoggedIn && (<UserMenu />)} 
        {!isLoggedIn && (<AuthNav />)}
      </nav>
    </header>
  );
};

export default Header;
