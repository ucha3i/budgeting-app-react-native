let nextId = 3

const initialState = [
  {
    id: 1,
    amount: 20000,
    account: "card",
    date: "2020-03-04",
    category: "wypłata",
    description: "ziemniaki"
  },
  {
    id: 2,
    amount: 500,
    account: "wallet",
    date: "2020-04-02",
    category: "znalezione",
    description: "..."
  },
]

const incomes = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_INCOMES':
      return [
        ...state,
        {
          id: nextId++,
          amount: action.amount,
          account: action.account,
          date: action.date,
          category: action.category,
          description: action.description
        }
      ]
    default:
      return state
  }
}
export default incomes