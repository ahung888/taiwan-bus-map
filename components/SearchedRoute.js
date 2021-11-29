import {useRouter} from 'next/router'
import {useDispatch} from 'react-redux'
import {fetchStopOfRoute, fetchEstimatedTimeOfArrival} from '../store/busReducer'
import {CITYCODES} from '../store/locations'
import styles from '../styles/searchedroute.module.css'

const SearchedRoute = ({data}) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const citycode = data.uid.substring(0,3)
  const city = CITYCODES?.[citycode] || ''

  const handleClick = () => {
    dispatch(fetchStopOfRoute({ city: city.id, routeUID: data.uid }))
    dispatch(fetchEstimatedTimeOfArrival({ city: city.id, routeUID: data.uid }))
    router.push('/routes')
  }

  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <div className={styles.header}>
        <div className="title">{data.name}</div>
        <div className={styles.darkFont}>{city.name}</div>
      </div>
      <div className={styles.body}>
        {data.depa} - {data.dest}
      </div>
    </div>
  )
}

export default SearchedRoute