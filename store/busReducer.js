import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { GetAuthorizationHeader } from '../utils/authorization'

const EntityLimit = 1000

export const fetchStopOfRoute = createAsyncThunk(
  'bus/fetchStopOfRoute',
  async ({city, routeUID}, thunkAPI) => {
    const url = `https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/${city}?$filter=RouteUID%20eq%20'${routeUID}'&$top=${EntityLimit}&$format=JSON`
    const response = await fetch(url, { headers: GetAuthorizationHeader() })
    const data = await response.json()
    return data
  }
)

export const fetchEstimatedTimeOfArrival = createAsyncThunk(
  'bus/fetchEstimatedTimeOfArrival',
  async ({city, routeUID}, thunkAPI) => {
    const url = `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${city}?$filter=RouteUID%20eq%20'${routeUID}'&$top=${EntityLimit}&$format=JSON`
    const response = await fetch(url, { headers: GetAuthorizationHeader() })
    const data = await response.json()
    return data
  }
)

const initialState = {
  routes: null,
  stops: null,
  estimatedTimeOfArrival: null,
  loading: 'idle',
}

export const busSlice = createSlice({
  name: 'bus',
  initialState: initialState,
  reducers: {
    reset(state, action) {
      state = { ...initialState }
    },
    setStops(state, action) {
      state.stops = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchStopOfRoute.pending, (state, action) => {
        state.loading = 'loading'
      })
      .addCase(fetchStopOfRoute.fulfilled, (state, action) => {
        state.loading = 'loaded'
        state.routes = action.payload
      })
      .addCase(fetchStopOfRoute.rejected, (state, action) => {
        state.loading = 'failed'
      })
      .addCase(fetchEstimatedTimeOfArrival.pending, (state, action) => {
        state.loading = 'loading'
      })
      .addCase(fetchEstimatedTimeOfArrival.fulfilled, (state, action) => {
        state.loading = 'loaded'
        const data = action.payload.reduce((a,c) => {
          const key = `${c.StopUID}-${c.Direction}`
          a[key] = c
          return a
        }, {})
        state.estimatedTimeOfArrival = data
      })
      .addCase(fetchEstimatedTimeOfArrival.rejected, (state, action) => {
        state.loading = 'failed'
      })
  }
})

export const {
  reset,
  setStops,
} = busSlice.actions

export const selectBus = (id) => (state) => state?.[busSlice.name]?.[id];

export default busSlice.reducer