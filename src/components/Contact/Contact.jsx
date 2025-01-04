import { useDispatch } from 'react-redux'
import css from './Contact.module.css'
import { deleteContact } from '../../redux/contactsOps'
import { FaUser } from "react-icons/fa";
import { FaUserTimes } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = ({data: {id, name, number}}) => {
  const dispatch = useDispatch()
  return (
    <div className={css.contactItem}>
        <div className={css.contactInfo}>
          <p className={css.contactName}><FaUser className={css.contactIcons}/> {name}</p>
          <p className={css.contactNumber}><FaPhone className={css.contactIcons}/> {number}</p>
        </div>
        <button className={css.contactBtnDelete} onClick={() => dispatch(deleteContact(id))}>Delete <FaUserTimes className={css.iconBtn}/></button>
    </div>
  )
}

export default Contact