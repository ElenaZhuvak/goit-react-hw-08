// import { useDispatch, useSelector } from "react-redux"
// import { useEffect } from "react"
// import Contact from "../Contact/Contact"
// import css from './ContactList.module.css'
// import { fetchContacts } from "../../redux/contactsOps.js"
// import { selectFilteredContacts } from "../../redux/contactsSlice.js"
// import { selectIsLoading } from "../../redux/selectors.js"


const ContactList = () => {

//   const dispatch = useDispatch()
//   const isLoading = useSelector(selectIsLoading)

//   useEffect(() => {
//     dispatch(fetchContacts())
//   }, [dispatch])
  
//   const filteredContacts = useSelector(selectFilteredContacts)

  return (
    <div>
        <h2>My all contacts</h2>
      {/* {isLoading && <h2>Loading...</h2>}
      <ul className={css.listItem}>
          {filteredContacts.map(contact => {
              return <li key={contact.id}>
                  <Contact data={contact}/>
              </li>
          })}
      </ul> */}
    </div>
  )
}

export default ContactList