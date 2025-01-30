import 'modern-normalize';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/LoginPage/LoginPage';
import HomePage from '../pages/HomePage/HomePage';
import NotFound from '../pages/NotFound/NotFound';
import Register from '../pages/RegistrationPage/RegistrationPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/contacts' element={<ContactsPage />} />
        </Route>

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />

      </Routes>

    </div>
  );
};

export default App;
