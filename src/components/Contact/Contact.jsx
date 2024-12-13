import css from './Contact.module.css'

const Contact = ({data: {id, name, number}, onDelete}) => {
  return (
    <div className={css.contactItem}>
        <div className={css.contactInfo}>
          <p className={css.contactName}>{name}</p>
          <p className={css.contactNumber}>{number}</p>
        </div>
        <button onClick={() => {onDelete(id)}}>Delete</button>
    </div>
  )
}

export default Contact