import 'modern-normalize';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import HomePage from '../pages/HomePage/HomePage';
import NotFound from '../pages/NotFound/NotFound';
import Register from '../pages/Register/Register';
import Header from './Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />

      </Routes>

    </div>
  );
};

export default App;
