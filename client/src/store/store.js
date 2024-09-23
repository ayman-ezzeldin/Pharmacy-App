import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth-slice/index.js'
import adminProductsSlice from './admin/products-slice'
import shopProudctSlice from './shop/products-slice'

const store = configureStore({
  reducer: {
    auth : authReducer,
    adminProducts : adminProductsSlice,
    shopProducts : shopProudctSlice
  },
})

export default store