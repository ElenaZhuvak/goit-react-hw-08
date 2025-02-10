import { NavLink } from 'react-router-dom';
import { buildLinkClass } from '../../helpers/buildLinkClass';
import css from '../AuthNav/AuthNav.module.css'

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink to="/contacts" className={buildLinkClass}>
        Contacts
      </NavLink>
      <NavLink to="/login" className={buildLinkClass}>
        Login
      </NavLink>
      <NavLink to="/register" className={buildLinkClass}>
        Registration
      </NavLink>
    </div>
  );
};

export default AuthNav;
