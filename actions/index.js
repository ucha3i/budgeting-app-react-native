export const fetchAccounts = (accounts) => ({
  type: "FETCH_ACCOUNTS",
  accounts
})

export const fetchExpenses = (expenses) => ({
  type: "FETCH_EXPENSES",
  expenses
})

export const fetchCategories = (categories) => ({
  type: "FETCH_CATEGORIES",
  categories
})

export const fetchIncomes = (incomes) => ({
  type: "FETCH_INCOMES",
  incomes
})

export const addExpense = (amount, date, category, description) => ({
  type: 'ADD_EXPENSE',
  amount,
  date,
  category,
  description
})

export const addCategory = (name, description) => ({
  type: 'ADD_CATEGORY',
  name,
  description
})

export const addAccount = (name, saldo) => ({
  type: 'ADD_ACCOUNT',
  name,
  saldo
})

export const addIncome = (amount, account, date, category, description) => ({
  type: 'ADD_INCOME',
  amount,
  account,
  date,
  category,
  description
})