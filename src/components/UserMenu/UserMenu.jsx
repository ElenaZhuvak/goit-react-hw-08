import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import css from './UserMenu.module.css'

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
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
