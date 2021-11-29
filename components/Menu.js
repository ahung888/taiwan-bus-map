import {FiMenu} from 'react-icons/fi'

const Menu = ({onMenuClick}) => {
  return <div className="btn btn-bullet menu" onClick={onMenuClick}><FiMenu /></div>
}

export default Menu