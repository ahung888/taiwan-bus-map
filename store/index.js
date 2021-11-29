import {configureStore} from '@reduxjs/toolkit'
import {createWrapper} from 'next-redux-wrapper'
import deviceReducer from './deviceReducer'
import searchReducer from './searchReducer'
import busReducer from './busReducer'

const makeStore = () =>
  configureStore({
    reducer: {
      device: deviceReducer,
      search: searchReducer,
      bus: busReducer,
    },
  });

export const wrapper = createWrapper(makeStore);
export {setDevice, selectDevice, selectDeviceAll} from './deviceReducer'
export {setText as setSearchText, selectSearch} from './searchReducer'
