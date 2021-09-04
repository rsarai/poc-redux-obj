import { configureStore } from '@reduxjs/toolkit'

const counterReducer = null;

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
