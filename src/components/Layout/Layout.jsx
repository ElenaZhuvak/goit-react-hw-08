import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import AppBar from '../AppBar/AppBar';

const Layout = () => {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <AppBar />
      <div className='flex-1 w-full overflow-hidden'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;