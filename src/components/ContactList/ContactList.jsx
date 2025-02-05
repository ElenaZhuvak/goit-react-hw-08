import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import Contact from "../Contact/Contact"
import css from './ContactList.module.css'
import { fetchContacts } from "../../redux/contacts/operations.js"
import { selectIsLoading } from "../../redux/contacts/selectors.js"
import { selectFilteredContacts } from "../../redux/contacts/slice.js"


const ContactList = () => {

  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  
  const filteredContacts = useSelector(selectFilteredContacts)

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      <ul className={css.listItem}>
          {filteredContacts.map(contact => {
              return <li key={contact.id}>
                  <Contact data={contact}/>
              </li>
          })}
      </ul>
    </div>
  )
}

export default ContactList