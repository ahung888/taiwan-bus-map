import {useState} from 'react'
import Menu from '../Menu'
import Nav from '../Nav'

const NavLayout = ({children}) => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-wrapper">
      <Menu onMenuClick={() => setShowNav(true)} />
      <Nav show={showNav} onNavClose={() => setShowNav(false)} />
      {children}
    </div>
  )
}

export default NavLayout