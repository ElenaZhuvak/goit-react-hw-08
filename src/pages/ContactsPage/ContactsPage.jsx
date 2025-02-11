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
          <ContactForm />
          <SearchBox />
          <ContactList />
        </>
      )}
    </div>
  );
};

export default ContactsPage;
