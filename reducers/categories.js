let nextId = 3

const initialState = [
  {
    id: 1,
    name: "grocery",
    description: "basic groceries"
  },
  {
    id: 2,
    name: "car",
    description: "car maintenance"
  },
]

const categories = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [
        ...state,
        {
          id: nextId++,
          name: action.name,
          description: action.description
        }
      ]
    default:
      return state
  }
}
export default categories