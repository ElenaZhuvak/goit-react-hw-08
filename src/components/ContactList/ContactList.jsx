import { useDispatch, useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import css from './ContactList.module.css'
import { selectContacts } from "../../redux/contactsSlice"
import { selectFilter } from "../../redux/filtersSlice"
import { useEffect } from "react"
import { fetchContacts } from "../../redux/contacts0ps.js"
import { selectIsLoading } from "../../redux/contactsSlice.js"


const ContactList = () => {
  const contacts = useSelector(selectContacts)
  const filter = useSelector(selectFilter)

  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.includes(filter))
  console.log(filteredContacts)

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