import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useRouter} from 'next/router'
import {selectBus} from '../store/busReducer'
import NavLayout from '../components/layouts/NavLayout'
import styles from '../styles/routes.module.css'
import routesByUID from '../store/routesByUID.json'

const directionName = (id) => {
  switch (id) {
    case 0: return '去程'
    case 1: return '返程'
    case 2: return '迴圈'
    default: return '未知'
  }
}
const vehicleStopStatus = (status) => {
  if (status === 0) return '離站'
  if (status === 1) return '進站'
  return ''
}
const selectRoute = routeUID => routesByUID?.[routeUID]
const getRouteName = (routeUID, direction) => {
  const route = selectRoute(routeUID)
  if (route === undefined) return ''
  const { depa, dest } = route
  return direction === 0 ? `${depa} - ${dest}` : `${dest} - ${depa}`
}

export default function Routes() {
  const router = useRouter()
  const [currentRouteIndex, setCurrentRouteIndex] = useState(null)
  const routes = useSelector(selectBus('routes'))
  const estimatedTimeOfArrival = useSelector(selectBus('estimatedTimeOfArrival'))

  if (currentRouteIndex === null && routes && routes?.[0]) {
    setCurrentRouteIndex(0)
  }

  let renderedStops = ''
  const currentRoute = routes?.[currentRouteIndex]
  if (currentRoute !== undefined) {
    renderedStops = currentRoute.Stops.map((stop,i) => {
      const key = `${stop.StopUID}-${currentRoute.Direction}`
      const arrivalInfo = estimatedTimeOfArrival[key]
      const time = arrivalInfo?.EstimateTime
      let formatedTime = '-'
      if (time) {
        formatedTime = `${Math.floor(time / 60)}分`
      } else {
        if (arrivalInfo?.Estimate?.VehicleStopStatus !== undefined) {
          formatedTime = vehicleStopStatus(arrivalInfo?.Estimate?.VehicleStopStatus)
        }
      }

      return (
        <div className={styles.stop} key={i}>
          <div className={styles.stopTime}>{formatedTime}</div>
          {stop.StopName.Zh_tw}
        </div>
      )
    })
  }

  const renderedRouteName = getRouteName(currentRoute?.RouteUID, currentRoute?.Direction)
  
  const handleDirectionToggle = () => {
    if (routes?.length === undefined) return
    const lastIndex = routes?.length - 1
    const nextIndex = currentRouteIndex + 1
    if (nextIndex > lastIndex) nextIndex = 0
    setCurrentRouteIndex(nextIndex)
  }

  return (
    <NavLayout>
      <main className={styles.content}>
        <div className={styles.btnReturn} onClick={() => router.back()}>返回</div>
        <div className={styles.header}>
          <div className="name">{renderedRouteName}</div>
          <div className={styles.btnHeader} onClick={handleDirectionToggle}>{directionName(currentRoute?.Direction)}</div>
        </div>
        <div className={styles.result}>
          {renderedStops}
        </div>
      </main>
    </NavLayout>
  )
}
