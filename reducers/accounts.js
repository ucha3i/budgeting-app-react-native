const accounts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ACCOUNT':
      return [
        ...state,
        {
          id: nextId++,
          name: action.name,
          saldo: action.saldo
        }
      ]

    case 'FETCH_ACCOUNTS':
      return action.accounts

    default:
      return state
  }
}
export default accounts