import 'modern-normalize';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import NotFound from '../pages/NotFound/NotFound';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import Layout from './Layout/Layout';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { useEffect } from 'react';
import { selectIsRefreshing } from '../redux/auth/selectors';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </div>
  );
};

export default App;
