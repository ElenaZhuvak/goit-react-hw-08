import { useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';

const ContactsPage = () => {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <div>
      <ContactForm />
      {contacts.length > 0 && (
        <>
          <SearchBox />
          <ContactList />
        </>
      )}
    </div>
  );
};

export default ContactsPage;
