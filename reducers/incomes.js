/* let nextId = 3

const initialState = [
  {
    id: 1,
    amount: 20000,
    account: "card",
    date: "2020-03-04",
    description: "wypłata"
  },
  {
    id: 2,
    amount: 500,
    account: "wallet",
    date: "2020-04-02",
    description: "znalezione"
  },
] */

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