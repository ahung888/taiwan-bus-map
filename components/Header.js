import {useSelector, useDispatch} from 'react-redux'
import {selectSearch, setSearchText} from '../store'

const Header = () => {
  const dispatch = useDispatch()
  const searchText = useSelector(selectSearch('text'))

  const onInputChange = event => {
    dispatch(setSearchText(event.target.value))
  }
  
  return (
    <div className="header">
      <div className="search-panel">
        <input
          type="text"
          className="search-input"
          value={searchText}
          onChange={onInputChange}
        />
      </div>
    </div>
  )
}

export default Header