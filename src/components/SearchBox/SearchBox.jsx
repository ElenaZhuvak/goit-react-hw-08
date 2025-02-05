import { useDispatch, useSelector } from "react-redux"
import { selectFilter } from "../../redux/contacts/selectors"
import { changeFilter } from "../../redux/filters/slice"

const SearchBox = () => {
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" 
              value={filter} 
              onChange={(event) => dispatch(changeFilter(event.target.value))} />
    
    </div>
  )
}

export default SearchBox