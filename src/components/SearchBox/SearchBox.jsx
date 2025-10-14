import { useDispatch, useSelector } from "react-redux"
import { selectFilter } from "../../redux/contacts/selectors"
import { changeFilter } from "../../redux/filters/slice"

const SearchBox = () => {
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl">Find contacts by name</p>
      <input type="text" 
              value={filter} 
              onChange={(event) => dispatch(changeFilter(event.target.value))}
              className="rounded-md p-1.5 w-80 shadow-[0_0_10px_4px_lightskyblue]" />
    
    </div>
  )
}

export default SearchBox