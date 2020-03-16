import { combineReducers } from 'redux'
import expenses from './expenses'
import categories from './categories'
import accounts from './accounts'
import incomes from './incomes'

export default combineReducers({
  expenses,
  categories,
  accounts,
  incomes
})