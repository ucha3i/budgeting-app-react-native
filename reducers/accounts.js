let nextId = 4

const initialState = [
  {
    id: 1,
    name: "cash",
    saldo: 100
  },
  {
    id: 2,
    name: "card",
    saldo: 20000
  },
  {
    id: 3,
    name: "credit card",
    saldo: 0
  }
]

const accounts = (state = initialState, action) => {
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