import { NavLink } from 'react-router-dom';
import css from '../Navigation/Navigation.module.css';
import { buildLinkClass } from '../../helpers/buildLinkClass';

const Navigation = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
