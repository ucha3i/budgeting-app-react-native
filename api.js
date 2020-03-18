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

const saveAccount = (account) => {
  const newAccount = fetch('http://localhost:8080/accounts',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(account)
    })
    .then(res => res.json)
    .then(res => {
      return res
    })
  return newAccount
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

const saveExpense = (expense) => {
  const newExpense = fetch('http://localhost:8080/expenses', 
    { method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(expense)
  })
  .then(res => res.json)
  .then(res => {
    return res
  })
  return newExpense
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

const saveCategory = (category) => {
  const newCategory = fetch('http://localhost:8080/categories',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(category)
    })
    .then(res => res.json)
    .then(res => {
      return res
    })
  return newCategory
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

const saveIncome = (income) => {
  const newIncome = fetch('http://localhost:8080/incomes',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(income)
    })
    .then(res => res.json)
    .then(res => {
      return res
    })
  return newIncome
}

export default { fetchAccountsList, fetchExpensesList, fetchCategoriesList, fetchIncomesList, saveExpense, saveCategory, saveAccount, saveIncome }