const expenses = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        {
          id: nextId++,
          amount: action.amount,
          date: action.date,
          category: action.category,
          description: action.description
        }
      ]

    case 'FETCH_EXPENSES':
      return action.expenses

    default:
      return state
  }
}
export default expenses