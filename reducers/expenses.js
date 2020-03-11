let nextId = 4

const initialState = [
  {
    id:1,
    amount: 45,
    date: "2020-03-04",
    category: "grocery",
    description: "ziemniaki"
  },
  {
    id:2,
    amount: 35,
    date: "2020-03-02",
    category: "car",
    description: "mietek"
  },
  {
    id:3,
    amount: 15,
    date: "2020-03-05",
    category: "car",
    description: "benzyna"
  }
]

const expenses = (state = initialState, action) => {
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
    default:
      return state
  }
}
export default expenses