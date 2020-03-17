const incomes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INCOMES':
      return [
        ...state,
        {
          id: nextId++,
          amount: action.amount,
          account: action.account,
          date: action.date,
          description: action.description
        }
      ]

    case 'FETCH_INCOMES':
      return action.incomes

    default:
      return state
  }
}
export default incomes