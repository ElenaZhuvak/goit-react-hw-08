import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import toast from 'react-hot-toast';


const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    username: '',
    number: '',
  };
  const contacts = useSelector(selectContacts);
  const usernameId = useId();
  const telId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.number,
    };
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === newContact.name.toLowerCase() ||
          contact.number === newContact.number
      )
    ) {
      return toast.error(
        `${newContact.name} or ${newContact.number} is already in your contacts`
      );
    }
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  const contactsSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Too short')
      .max(50, 'Too long')
      .required('Required'),
    number: Yup.string()
      .matches(/^\+\d{12}$/, 'Invalid phone number format')
      .required('Phone number is required'),
  });

  return (
    <div className={css.wrapper}>
      <Formik
        validationSchema={contactsSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label} htmlFor={usernameId}>
            Name
          </label>
          <Field className={css.field} type="text" name="username" placeholder='Name'></Field>
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />

          <label className={css.label} htmlFor={telId}>
            Number
          </label>
          <Field
            className={css.field}
            type="tel"
            name="number"
            placeholder="+123456789012"
          ></Field>
          <ErrorMessage className={css.error} name="number" component="span" />

          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
