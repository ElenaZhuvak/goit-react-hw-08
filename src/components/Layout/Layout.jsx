import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import AppBar from '../AppBar/AppBar';

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <AppBar />
      <div className='flex-1 w-full'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
