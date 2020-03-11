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