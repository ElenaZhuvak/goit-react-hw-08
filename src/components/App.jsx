import 'modern-normalize';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import NotFound from '../pages/NotFound/NotFound';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import Layout from './Layout/Layout';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/contacts' element={<ContactsPage />} />
        </Route>

          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='*' element={<NotFound />} />


      </Routes>

    </div>
  );
};

export default App;
