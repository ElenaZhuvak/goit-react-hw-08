import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { FaEdit, FaUser } from 'react-icons/fa';
import { FaUserTimes } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { deleteContact, editContact } from '../../redux/contacts/operations';
import { useState } from 'react';
import EditContactModal from '../EditContactModal/EditContactModal.jsx';

const Contact = ({ data: { id, name, number } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handelSave = updatedContact => {
    dispatch(editContact(updatedContact));
  }

  return (
    <div className={css.contactItem}>
      <div className={css.contactInfo}>
        <p className={css.contactName}>
          <FaUser className={css.contactIcons} /> {name}
        </p>
        <p className={css.contactNumber}>
          <FaPhone className={css.contactIcons} /> {number}
        </p>
      </div>

      <div className={css.contactBtnContainer}>
        <button
          className={css.contactBtnDelete}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete <FaUserTimes className={css.iconBtn} />
        </button>
        <button
          className={css.contactBtnEdit}
          onClick={() => setIsModalOpen(true)}
        >
          Edit <FaEdit className={css.iconBtn} />
        </button>
      </div>

      {isModalOpen && (
        <EditContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handelSave}
          contact={{ id, name, number }}
        />
      )}
    </div>
  );
};

export default Contact;
