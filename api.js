import { fetchAccounts, fetchExpenses, fetchCategories, fetchIncomes } from './actions/index'

const fetchAccountsList = () => {
  return dispatch => {
    fetch('http://localhost:8080/accounts')
      .then(res => res.json())
      .then(res => {
        dispatch(fetchAccounts(res))
        return res
      })
  }
}

const fetchExpensesList = () => {
  return dispatch => {
    fetch('http://localhost:8080/expenses')
      .then(res => res.json())
      .then(res => {
        dispatch(fetchExpenses(res))
        return res
      })
  }
}


const fetchCategoriesList = () => {
  return dispatch => {
    fetch('http://localhost:8080/categories')
      .then(res => res.json())
      .then(res => {
        dispatch(fetchCategories(res))
        return res
      })
  }
}

const fetchIncomesList = () => {
  return dispatch => {
    fetch('http://localhost:8080/incomes')
      .then(res => res.json())
      .then(res => {
        dispatch(fetchIncomes(res))
        return res
      })
  }
}

export default { fetchAccountsList, fetchExpensesList, fetchCategoriesList, fetchIncomesList }