import { createContext } from 'react'
// import {apiBus} from './bus'

export const ApiContext = createContext()

export const API_TYPES = Object.freeze({
  StopOfRoute: 1,
  EstimatedTimeOfArrival: 2,
})

export const createApi = () => {
  
  const apis = {
    // [API_TYPES.StopOfRoute]: apiBus(),
    // [API_TYPES.EstimatedTimeOfArrival]: apiBus(),
  }

  const getBusStops = () => {
    // apis[API_TYPES.StopOfRoute].get()
    // apis[API_TYPES.EstimatedTimeOfArrival].get()
  }

  const updateBusArrivalTime = () => {
    // apis[API_TYPES.EstimatedTimeOfArrival].get()
  }
  
  return {
    getBusStops,
    updateBusArrivalTime,
  }
}

export const emptyFunc = () => {}
export const emptyAsyncAction =  () => () => () => {}