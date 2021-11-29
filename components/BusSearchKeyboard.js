import {useSelector, useDispatch} from 'react-redux'
import {setSearchText, selectSearch} from '../store'
import {ImCross} from 'react-icons/im'
import {RiDeleteBack2Line} from 'react-icons/ri'

const btnNames = [
  '紅', '藍', '1', '2', '3',
  '綠', '棕', '4', '5', '6',
  '橘', '黃', '7', '8', '9',
  'F', '小', '0'
]
const btnColors = [
  'red', 'blue', 'primary', 'primary', 'primary', 
  'green', 'brown', 'primary', 'primary', 'primary', 
  'orange', 'yellow', 'primary', 'primary', 'primary', 
  'white', 'white', 'primary'
]

const BusSearchKeyboard = () => {
  const dispatch = useDispatch()
  const searchText = useSelector(selectSearch('text'))

  const handleButtonClick = name => {
    dispatch(setSearchText(`${searchText}${name}`))
  }
  const handleDelete = () => {
    dispatch(setSearchText(''))
  }
  const handleDeleteOneChar = () => {
    dispatch(setSearchText(searchText.substring(0,searchText.length-1)))
  }

  const renderedButtons = btnNames.map((name, i) => {
    const classname = `btn btn-${btnColors[i]}`
    return <div className={classname} key={i} onClick={() => handleButtonClick(name)}>{name}</div>
  })

  return (
    <div className="search-keyboard">
      {renderedButtons}
      <div className="btn btn-primary" onClick={handleDelete}><ImCross/></div>
      <div className="btn btn-primary" onClick={handleDeleteOneChar}><RiDeleteBack2Line/></div>
    </div>
  )
}

export default BusSearchKeyboard