import { useDispatch, useSelector } from "react-redux"
import { selectFilter } from "../../redux/selectors"
import { changeFilter } from "../../redux/filtersSlice"

const SearchBox = () => {
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()

  console.log('SEARCH-BOX')

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