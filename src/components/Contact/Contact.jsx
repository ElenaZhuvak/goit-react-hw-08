import { useDispatch } from 'react-redux'
import css from './Contact.module.css'
import { deleteContact } from '../../redux/contactsSlice'

const Contact = ({data: {id, name, number}}) => {
  const dispatch = useDispatch()
  return (
    <div className={css.contactItem}>
        <div className={css.contactInfo}>
          <p className={css.contactName}>{name}</p>
          <p className={css.contactNumber}>{number}</p>
        </div>
        <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </div>
  )
}

export default Contact