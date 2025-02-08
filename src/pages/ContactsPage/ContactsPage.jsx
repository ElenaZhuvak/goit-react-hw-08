import { useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

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
