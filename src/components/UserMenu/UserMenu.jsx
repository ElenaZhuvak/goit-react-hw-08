import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import css from './UserMenu.module.css';
import { NavLink } from 'react-router-dom';
import { buildLinkClass } from '../../helpers/buildLinkClass';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.wrapper}>
      {isLoggedIn && (
        <>
          <NavLink to="/contacts" className={buildLinkClass}>
            Contacts
          </NavLink>
        </>
      )}
      <p>Welcome, {user.name}</p>
      <button
        type="button"
        onClick={() => dispatch(logout())}
        className={css.btnLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
