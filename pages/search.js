import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {selectSearch} from '../store'
import NavLayout from '../components/layouts/NavLayout'
import Header from '../components/Header'
import BusSearchKeyboard from '../components/BusSearchKeyboard'
import SearchedRoute from '../components/SearchedRoute'
import Map from '../components/Map'
import allRoutes from '../store/routes.json'

const routeNames = Object.keys(allRoutes)

export default function Home() {
  const [routes, setRoutes] = useState(null)
  const searchText = useSelector(selectSearch('text'))

  useEffect(() => {
    if (searchText.length > 0) {
      const searchedRoutes = routeNames
        .filter(name => name.indexOf(searchText) !== -1)
        .map(name => allRoutes[name])
        .reduce((accu, route) => accu.concat(route), [])
      setRoutes(searchedRoutes)
    } else {
      setRoutes(null)
    }
  }, [searchText])

  const renderedRoutes = routes ? routes.map((route, i) => (
    <SearchedRoute data={route} key={i} />
  )) : ''

  return (
    <NavLayout>
      <Header />
      <main className="search-content">
        <div className="search-result">
          {renderedRoutes}
        </div>
        <BusSearchKeyboard />
      </main>
      {/* <Map /> */}
    </NavLayout>
  )
}
