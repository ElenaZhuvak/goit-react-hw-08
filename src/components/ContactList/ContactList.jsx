import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import Contact from "../Contact/Contact"
import css from './ContactList.module.css'
import { fetchContacts } from "../../redux/operations.js"
import { selectFilteredContacts } from "../../redux/contactsSlice.js"
import { selectFilter } from "../../redux/selectors.js"
import { selectIsLoading } from "../../redux/selectors.js"


const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts)
  const filter = useSelector(selectFilter)

  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase()
  .includes(filter.toLowerCase())|| contact.number.includes(filter))

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