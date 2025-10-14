import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { lazy } from 'react';

const ContactForm = lazy(() => import('../../components/ContactForm/ContactForm'))
const ContactList = lazy(() => import('../../components/ContactList/ContactList'))
const SearchBox = lazy(()=>import('../../components/SearchBox/SearchBox'))

const ContactsPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn && (
        <>
          <div className="flex justify-center items-center gap-24 mb-20 mt-20">
            <ContactForm />
            <SearchBox />
          </div>

          <ContactList />
        </>
      )}
    </div>
  );
};

export default ContactsPage;
