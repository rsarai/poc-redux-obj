import { configureStore } from '@reduxjs/toolkit'
import auctionerReducer from './slices'

export default configureStore({
  reducer: {
    entities: auctionerReducer
  }
})
