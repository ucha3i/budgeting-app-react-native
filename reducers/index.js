import { combineReducers } from 'redux'
import expenses from './expenses'
import categories from './categories'

export default combineReducers({
  expenses,
  categories
})